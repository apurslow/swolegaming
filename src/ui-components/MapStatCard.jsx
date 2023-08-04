/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function MapStatCard(props) {
  const { mapRotation, overrides, ...rest } = props;
  const linktoMapSourceOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: mapRotation?.MapSource,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="637px"
      height="675px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MapStatCard")}
      {...rest}
    >
      <Image
        width="unset"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={mapRotation?.ImgSRC}
        {...getOverrideProps(overrides, "Map Img")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area39471839")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group39471840")}
        >
          <Text
            fontFamily="Teko"
            fontSize="24px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="34.391998291015625px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="[Swole and Destroy 1] swolegaming.net"
            {...getOverrideProps(overrides, "Server Name")}
          ></Text>
          <Text
            fontFamily="Teko"
            fontSize="24px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="34.391998291015625px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={mapRotation?.MapName}
            {...getOverrideProps(overrides, "Map Title")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area39471823")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="82px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group39471824")}
        >
          <Text
            fontFamily="Teko"
            fontSize="24px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="34.391998291015625px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Blue Team"
            {...getOverrideProps(overrides, "Blue Team name ")}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="11px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group39471832")}
        >
          <Text
            fontFamily="Teko"
            fontSize="24px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="34.391998291015625px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="9"
            {...getOverrideProps(overrides, "Blue Team Score")}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="77px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group39471834")}
        >
          <Text
            fontFamily="Teko"
            fontSize="24px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="34.391998291015625px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Red Team"
            {...getOverrideProps(overrides, "Red Team Name")}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="10px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group39471836")}
        >
          <Text
            fontFamily="Teko"
            fontSize="24px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="34.391998291015625px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="7"
            {...getOverrideProps(overrides, "Red Team Score")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area39471808")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group39471812")}
        >
          <Text
            fontFamily="Teko"
            fontSize="24px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="34.391998291015625px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Next Map"
            {...getOverrideProps(overrides, "Next Map Label")}
          ></Text>
          <Text
            fontFamily="Teko"
            fontSize="24px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="34.391998291015625px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Map Author"
            {...getOverrideProps(overrides, "Map Author Label")}
          ></Text>
          <Text
            fontFamily="Teko"
            fontSize="24px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="34.391998291015625px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Map Source"
            {...getOverrideProps(overrides, "Map Source Label")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group39471818")}
        >
          <Text
            fontFamily="Teko"
            fontSize="24px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="34.391998291015625px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Next Map Title"
            {...getOverrideProps(overrides, "Next Map Name")}
          ></Text>
          <Text
            fontFamily="Teko"
            fontSize="24px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="34.391998291015625px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={mapRotation?.MapAuthor}
            {...getOverrideProps(overrides, "Author Name")}
          ></Text>
          <Text
            fontFamily="Teko"
            fontSize="24px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="34.391998291015625px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={mapRotation?.MapSource}
            onClick={() => {
              linktoMapSourceOnClick();
            }}
            {...getOverrideProps(overrides, "Link to  Map Source")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
