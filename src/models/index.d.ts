import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMapRotation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MapRotation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly MapName?: string | null;
  readonly MapSource?: string | null;
  readonly MapAuthor?: string | null;
  readonly ImgSRC?: string | null;
  readonly LastUpdated?: string | null;
  readonly UGC?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMapRotation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MapRotation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly MapName?: string | null;
  readonly MapSource?: string | null;
  readonly MapAuthor?: string | null;
  readonly ImgSRC?: string | null;
  readonly LastUpdated?: string | null;
  readonly UGC?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MapRotation = LazyLoading extends LazyLoadingDisabled ? EagerMapRotation : LazyMapRotation

export declare const MapRotation: (new (init: ModelInit<MapRotation>) => MapRotation) & {
  copyOf(source: MapRotation, mutator: (draft: MutableModel<MapRotation>) => MutableModel<MapRotation> | void): MapRotation;
}