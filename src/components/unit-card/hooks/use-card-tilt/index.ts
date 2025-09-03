import { useEffect, useRef } from "react";
import type { UseCardTiltOptions } from "./types";

export function useCardTilt({
	maxRotate = 12,
	maxTranslate = 8,
	liftY = -10,
	liftZ = 40,
	easing = 0.12,
	isShiny = false,
}: UseCardTiltOptions = {}) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const cardRef = useRef<HTMLDivElement | null>(null);
	const shineRef = useRef<HTMLDivElement | null>(null);
	const rafRef = useRef<number | null>(null);

	const current = useRef({
		rx: 0,
		ry: 0,
		tx: 0,
		ty: 0,
		tz: 0,
		tyLift: 0,
		scale: 1,
		shineAngle: 45,
	});
	const target = useRef({
		rx: 0,
		ry: 0,
		tx: 0,
		ty: 0,
		tz: 0,
		tyLift: 0,
		scale: 1,
		shineAngle: 45,
	});

	const animate = () => {
		const c = current.current;
		const t = target.current;

		c.rx += (t.rx - c.rx) * easing;
		c.ry += (t.ry - c.ry) * easing;
		c.tx += (t.tx - c.tx) * easing;
		c.ty += (t.ty - c.ty) * easing;
		c.tz += (t.tz - c.tz) * easing;
		c.tyLift += (t.tyLift - c.tyLift) * easing;
		c.scale += (t.scale - c.scale) * easing;
		c.shineAngle += (t.shineAngle - c.shineAngle) * easing;

		if (cardRef.current) {
			cardRef.current.style.transform =
				`translate3d(${c.tx}px, ${c.ty + c.tyLift}px, ${c.tz}px) ` +
				`rotateX(${c.rx}deg) rotateY(${c.ry}deg) scale(${c.scale})`;
		}

		if (isShiny && shineRef.current) {
			shineRef.current.style.background = `
        linear-gradient(${c.shineAngle}deg,
          rgba(255,0,150,0.4) 0%,
          rgba(0,200,255,0.4) 25%,
          rgba(255,255,0,0.4) 50%,
          rgba(0,255,100,0.4) 75%,
          rgba(255,0,150,0.4) 100%
        )
      `;
		}

		const stillMoving =
			Math.abs(c.rx - t.rx) > 0.01 ||
			Math.abs(c.ry - t.ry) > 0.01 ||
			Math.abs(c.tx - t.tx) > 0.05 ||
			Math.abs(c.ty - t.ty) > 0.05 ||
			Math.abs(c.tz - t.tz) > 0.05 ||
			Math.abs(c.tyLift - t.tyLift) > 0.05 ||
			Math.abs(c.scale - t.scale) > 0.0005 ||
			Math.abs(c.shineAngle - t.shineAngle) > 0.5;

		if (stillMoving) {
			rafRef.current = requestAnimationFrame(animate);
		} else {
			rafRef.current = null;
		}
	};

	const requestAnim = () => {
		if (rafRef.current == null) rafRef.current = requestAnimationFrame(animate);
	};

	const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
		// biome-ignore lint/style/noNonNullAssertion: element
		const el = containerRef.current!;
		const rect = el.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const nx = (x / rect.width) * 2 - 1;
		const ny = (y / rect.height) * 2 - 1;

		target.current.ry = nx * maxRotate;
		target.current.rx = -ny * maxRotate;
		target.current.tx = nx * maxTranslate;
		target.current.ty = ny * maxTranslate;

		// mudar ângulo do brilho conforme o mouse
		target.current.shineAngle = 45 + nx * 20 - ny * 20;

		requestAnim();
	};

	const onMouseEnter = () => {
		target.current.tz = liftZ;
		target.current.tyLift = liftY;
		target.current.scale = 1.03;
		requestAnim();
		if (cardRef.current) {
			cardRef.current.style.boxShadow = "0 25px 50px rgba(0,0,0,0.4)";
		}
	};

	const onMouseLeave = () => {
		target.current = {
			rx: 0,
			ry: 0,
			tx: 0,
			ty: 0,
			tz: 0,
			tyLift: 0,
			scale: 1,
			shineAngle: 45,
		};
		requestAnim();
		if (cardRef.current) {
			cardRef.current.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
		}
	};

	useEffect(() => {
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, []);

	return {
		containerRef,
		cardRef,
		shineRef: isShiny ? shineRef : null,
		eventHandlers: { onMouseMove, onMouseEnter, onMouseLeave },
	};
}
