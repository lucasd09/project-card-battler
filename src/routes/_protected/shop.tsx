import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { openPack } from '@/fn/ open-pack'
import { cn } from '@/lib/utils'
import { useMutation } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Coins, Diamond, UserCircle2 } from 'lucide-react'

export const Route = createFileRoute('/_protected/shop')({
  component: RouteComponent,
})

const packs = [
  { id: 1, name: 'Starter Pack', description: 'Start your journey with these', priceCoins: 500, priceGems: 100, img: 'pack.png', color: 'blue' },
]


function RouteComponent() {
  const { isPending, mutate } = useMutation({ mutationFn: () => openPack() });

  const handleBuyPack = async () => {
    await mutate()
  }
  return (
    <div className='flex flex-col items-center gap-6'>
      <h1 className='text-center text-4xl font-bold'>Character Packs</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-6xl"
      >
        <CarouselContent>
          {packs.map((pack) => (
            <CarouselItem key={pack.id}>
              <div className="p-1">
                <Card className={cn('border-4', `border-${pack.color}-500`, 'bg-muted')}>
                  <CardContent className="flex flex-col justify-between gap-3">
                    <div className='flex justify-between items-center'>
                      <span className="text-3xl font-semibold">{pack.name}</span>
                      <div className='flex gap-2'>
                        <div className="gap-4 px-3 py-1 w-max flex items-center font-semibold">
                          <Coins className="size-10 text-yellow-500" />
                          {pack.priceCoins}
                        </div>
                        <div className="gap-4 py-1 flex items-center font-semibold">
                          <Diamond className="size-10 rounded-full text-purple-500" />
                          {pack.priceGems}
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between items-center'>
                      <p>{pack.description}</p>
                      <p>Resets in 00:00:00</p>
                    </div>
                    <div className='flex gap-4'>
                      <img src={pack.img} alt={pack.name} className='aspect-square w-80 rounded-md border-2 border-primary' />
                      <div className='w-full h-full flex flex-col gap-6'>
                        <h2 className='text-xl font-semibold'>Possible drops:</h2>
                        <div className='flex gap-4'>
                          <div className='flex flex-col items-center gap-2'>
                            <div className='flex items-center justify-center size-24 border-4 border-green-600 rounded-md'>
                              <UserCircle2 className='size-14' />
                            </div>
                            <p className='font-semibold'>50%</p>
                          </div>

                          <div className='flex flex-col items-center gap-2'>
                            <div className='flex items-center justify-center size-24 border-4 border-blue-600 rounded-md'>
                              <UserCircle2 className='size-14' />
                            </div>
                            <p className='font-semibold'>30%</p>
                          </div>

                          <div className='flex flex-col items-center gap-2'>
                            <div className='flex items-center justify-center size-24 border-4 border-purple-500 rounded-md'>
                              <UserCircle2 className='size-14' />
                            </div>
                            <p className='font-semibold'>15%</p>
                          </div>

                          <div className='flex flex-col items-center gap-2'>
                            <div className='flex items-center justify-center size-24 border-4 border-yellow-400 rounded-md'>
                              <UserCircle2 className='size-14' />
                            </div>
                            <p className='font-semibold'>4%</p>
                          </div>

                          <div className='flex flex-col items-center gap-2'>
                            <div className='flex items-center justify-center size-24 border-4 border-red-600 rounded-md'>
                              <UserCircle2 className='size-14' />
                            </div>
                            <p className='font-semibold'>1%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-2 justify-end '>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size={'lg'}>Buy pack</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              Buy Pack
                            </DialogTitle>
                            <DialogDescription>
                              You are buying the {pack.name}
                            </DialogDescription>
                          </DialogHeader>
                          <div className='flex justify-center'>
                            <img src={pack.img} alt={pack.name} className='aspect-square w-52 rounded-md border-2 border-primary' />
                          </div>
                          <DialogFooter className='mx-auto'>
                            <Button onClick={handleBuyPack} disabled={isPending} className='w-26' size={'lg'}>
                              <Coins className="size-5 text-yellow-500" />
                              {pack.priceCoins}
                            </Button>
                            <Button onClick={handleBuyPack} disabled={isPending} className='w-26' size={'lg'}>
                              <Diamond className="size-5 rounded-full text-purple-500" />
                              {pack.priceGems}
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <h1 className='text-center text-4xl font-bold'>Cash shop</h1>
    </div>
  )
}
