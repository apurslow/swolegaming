/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { MapRotation } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MapRotationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    MapName: "",
    MapSource: "",
    MapAuthor: "",
    ImgSRC: "",
    LastUpdated: "",
    UGC: "",
  };
  const [MapName, setMapName] = React.useState(initialValues.MapName);
  const [MapSource, setMapSource] = React.useState(initialValues.MapSource);
  const [MapAuthor, setMapAuthor] = React.useState(initialValues.MapAuthor);
  const [ImgSRC, setImgSRC] = React.useState(initialValues.ImgSRC);
  const [LastUpdated, setLastUpdated] = React.useState(
    initialValues.LastUpdated
  );
  const [UGC, setUGC] = React.useState(initialValues.UGC);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMapName(initialValues.MapName);
    setMapSource(initialValues.MapSource);
    setMapAuthor(initialValues.MapAuthor);
    setImgSRC(initialValues.ImgSRC);
    setLastUpdated(initialValues.LastUpdated);
    setUGC(initialValues.UGC);
    setErrors({});
  };
  const validations = {
    MapName: [],
    MapSource: [{ type: "URL" }],
    MapAuthor: [],
    ImgSRC: [{ type: "URL" }],
    LastUpdated: [],
    UGC: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          MapName,
          MapSource,
          MapAuthor,
          ImgSRC,
          LastUpdated,
          UGC,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new MapRotation(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MapRotationCreateForm")}
      {...rest}
    >
      <TextField
        label="Map name"
        isRequired={false}
        isReadOnly={false}
        value={MapName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MapName: value,
              MapSource,
              MapAuthor,
              ImgSRC,
              LastUpdated,
              UGC,
            };
            const result = onChange(modelFields);
            value = result?.MapName ?? value;
          }
          if (errors.MapName?.hasError) {
            runValidationTasks("MapName", value);
          }
          setMapName(value);
        }}
        onBlur={() => runValidationTasks("MapName", MapName)}
        errorMessage={errors.MapName?.errorMessage}
        hasError={errors.MapName?.hasError}
        {...getOverrideProps(overrides, "MapName")}
      ></TextField>
      <TextField
        label="Map source"
        isRequired={false}
        isReadOnly={false}
        value={MapSource}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MapName,
              MapSource: value,
              MapAuthor,
              ImgSRC,
              LastUpdated,
              UGC,
            };
            const result = onChange(modelFields);
            value = result?.MapSource ?? value;
          }
          if (errors.MapSource?.hasError) {
            runValidationTasks("MapSource", value);
          }
          setMapSource(value);
        }}
        onBlur={() => runValidationTasks("MapSource", MapSource)}
        errorMessage={errors.MapSource?.errorMessage}
        hasError={errors.MapSource?.hasError}
        {...getOverrideProps(overrides, "MapSource")}
      ></TextField>
      <TextField
        label="Map author"
        isRequired={false}
        isReadOnly={false}
        value={MapAuthor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MapName,
              MapSource,
              MapAuthor: value,
              ImgSRC,
              LastUpdated,
              UGC,
            };
            const result = onChange(modelFields);
            value = result?.MapAuthor ?? value;
          }
          if (errors.MapAuthor?.hasError) {
            runValidationTasks("MapAuthor", value);
          }
          setMapAuthor(value);
        }}
        onBlur={() => runValidationTasks("MapAuthor", MapAuthor)}
        errorMessage={errors.MapAuthor?.errorMessage}
        hasError={errors.MapAuthor?.hasError}
        {...getOverrideProps(overrides, "MapAuthor")}
      ></TextField>
      <TextField
        label="Img src"
        isRequired={false}
        isReadOnly={false}
        value={ImgSRC}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MapName,
              MapSource,
              MapAuthor,
              ImgSRC: value,
              LastUpdated,
              UGC,
            };
            const result = onChange(modelFields);
            value = result?.ImgSRC ?? value;
          }
          if (errors.ImgSRC?.hasError) {
            runValidationTasks("ImgSRC", value);
          }
          setImgSRC(value);
        }}
        onBlur={() => runValidationTasks("ImgSRC", ImgSRC)}
        errorMessage={errors.ImgSRC?.errorMessage}
        hasError={errors.ImgSRC?.hasError}
        {...getOverrideProps(overrides, "ImgSRC")}
      ></TextField>
      <TextField
        label="Last updated"
        isRequired={false}
        isReadOnly={false}
        value={LastUpdated}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MapName,
              MapSource,
              MapAuthor,
              ImgSRC,
              LastUpdated: value,
              UGC,
            };
            const result = onChange(modelFields);
            value = result?.LastUpdated ?? value;
          }
          if (errors.LastUpdated?.hasError) {
            runValidationTasks("LastUpdated", value);
          }
          setLastUpdated(value);
        }}
        onBlur={() => runValidationTasks("LastUpdated", LastUpdated)}
        errorMessage={errors.LastUpdated?.errorMessage}
        hasError={errors.LastUpdated?.hasError}
        {...getOverrideProps(overrides, "LastUpdated")}
      ></TextField>
      <TextField
        label="Ugc"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={UGC}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              MapName,
              MapSource,
              MapAuthor,
              ImgSRC,
              LastUpdated,
              UGC: value,
            };
            const result = onChange(modelFields);
            value = result?.UGC ?? value;
          }
          if (errors.UGC?.hasError) {
            runValidationTasks("UGC", value);
          }
          setUGC(value);
        }}
        onBlur={() => runValidationTasks("UGC", UGC)}
        errorMessage={errors.UGC?.errorMessage}
        hasError={errors.UGC?.hasError}
        {...getOverrideProps(overrides, "UGC")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
