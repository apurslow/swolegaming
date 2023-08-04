/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MapRotationCreateFormInputValues = {
    MapName?: string;
    MapSource?: string;
    MapAuthor?: string;
    ImgSRC?: string;
    LastUpdated?: string;
    UGC?: number;
};
export declare type MapRotationCreateFormValidationValues = {
    MapName?: ValidationFunction<string>;
    MapSource?: ValidationFunction<string>;
    MapAuthor?: ValidationFunction<string>;
    ImgSRC?: ValidationFunction<string>;
    LastUpdated?: ValidationFunction<string>;
    UGC?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MapRotationCreateFormOverridesProps = {
    MapRotationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    MapName?: PrimitiveOverrideProps<TextFieldProps>;
    MapSource?: PrimitiveOverrideProps<TextFieldProps>;
    MapAuthor?: PrimitiveOverrideProps<TextFieldProps>;
    ImgSRC?: PrimitiveOverrideProps<TextFieldProps>;
    LastUpdated?: PrimitiveOverrideProps<TextFieldProps>;
    UGC?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MapRotationCreateFormProps = React.PropsWithChildren<{
    overrides?: MapRotationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MapRotationCreateFormInputValues) => MapRotationCreateFormInputValues;
    onSuccess?: (fields: MapRotationCreateFormInputValues) => void;
    onError?: (fields: MapRotationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MapRotationCreateFormInputValues) => MapRotationCreateFormInputValues;
    onValidate?: MapRotationCreateFormValidationValues;
} & React.CSSProperties>;
export default function MapRotationCreateForm(props: MapRotationCreateFormProps): React.ReactElement;
