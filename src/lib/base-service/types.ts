import { AnyColumn, Table } from "drizzle-orm";

export type BaseService<
  TModel,
  TInsert,
  TId extends number | string = number,
> = {
  create: (data: TInsert) => Promise<TModel>;
  createBulk: (data: TInsert[]) => Promise<TModel[]>;
  get: () => Promise<TModel[]>;
  getById: (id: TId) => Promise<TModel>;
  getByColumn: <TColumn extends keyof TModel>(
    column: TColumn,
    value: TModel[TColumn],
  ) => Promise<TModel[]>;
  update: (id: TId, data: Partial<TInsert>) => Promise<TModel>;
  delete: (id: TId) => Promise<TModel>;
  deleteBulk: (ids: TId[]) => Promise<TModel[]>;
};

export type BaseTable = Table & { id: AnyColumn };
