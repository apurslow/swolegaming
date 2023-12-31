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
import { Button, Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function SwolegamingHeader(props) {
  const { overrides, ...rest } = props;
  const discordIconOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://discord.gg/W2CDveWJMZ",
  });
  const homeOnClick = useNavigateAction({ type: "url", url: "/" });
  const serversOnClick = useNavigateAction({ type: "url", url: "/servers" });
  const leaderBoardsOnClick = useNavigateAction({
    type: "url",
    url: "/leader-boards",
  });
  const patreonOnClick = useNavigateAction({ type: "url", url: "/membership" });
  const newsOnClick = useNavigateAction({ type: "url", url: "/news" });
  const aboutUsOnClick = useNavigateAction({ type: "url", url: "/about" });
  const contactOnClick = useNavigateAction({ type: "url", url: "/contact" });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1443px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="16px 10px 16px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SwolegamingHeader")}
      {...rest}
    >
      <Flex
        gap="25px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 5")}
      >
        <Icon
          width="25px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 25, height: 20 }}
          paths={[
            {
              d: "M21.1636 1.65789C19.5701 0.890525 17.8614 0.325164 16.0749 0.00135832C16.0424 -0.00489103 16.0099 0.0107264 15.9931 0.0419621C15.7733 0.452184 15.5299 0.987351 15.3595 1.40799C13.4379 1.10606 11.5262 1.10606 9.64408 1.40799C9.47359 0.978001 9.22134 0.452184 9.0006 0.0419621C8.98384 0.0117686 8.95134 -0.00384885 8.9188 0.00135832C7.13324 0.324129 5.42454 0.88949 3.83014 1.65789C3.81634 1.66414 3.80451 1.67456 3.79665 1.68808C0.555616 6.77013 -0.33224 11.7273 0.103313 16.6229C0.105283 16.6469 0.118094 16.6698 0.135831 16.6843C2.27418 18.3325 4.34553 19.3331 6.37842 19.9964C6.41095 20.0068 6.44542 19.9943 6.46613 19.9662C6.94701 19.2769 7.37567 18.5502 7.7432 17.7859C7.76489 17.7412 7.74419 17.688 7.69986 17.6703C7.01993 17.3996 6.3725 17.0696 5.74972 16.6948C5.70046 16.6646 5.69651 16.5906 5.74183 16.5552C5.87289 16.4521 6.00398 16.3449 6.12912 16.2366C6.15176 16.2168 6.18331 16.2127 6.20993 16.2252C10.3013 18.1857 14.7308 18.1857 18.7739 16.2252C18.8005 16.2116 18.8321 16.2158 18.8557 16.2356C18.9809 16.3439 19.1119 16.4521 19.244 16.5552C19.2893 16.5906 19.2863 16.6646 19.2371 16.6948C18.6143 17.0769 17.9669 17.3996 17.2859 17.6693C17.2416 17.687 17.2219 17.7412 17.2436 17.7859C17.619 18.5491 18.0477 19.2759 18.5197 19.9651C18.5394 19.9943 18.5749 20.0068 18.6074 19.9964C20.6501 19.3331 22.7215 18.3325 24.8598 16.6843C24.8786 16.6698 24.8904 16.6479 24.8924 16.624C25.4136 10.964 24.0193 6.04755 21.1961 1.68912C21.1892 1.67456 21.1774 1.66414 21.1636 1.65789ZM8.35419 13.642C7.12239 13.642 6.10743 12.455 6.10743 10.9974C6.10743 9.53969 7.10271 8.35275 8.35419 8.35275C9.61549 8.35275 10.6206 9.55011 10.6009 10.9974C10.6009 12.455 9.60563 13.642 8.35419 13.642ZM16.6612 13.642C15.4294 13.642 14.4145 12.455 14.4145 10.9974C14.4145 9.53969 15.4097 8.35275 16.6612 8.35275C17.9225 8.35275 18.9276 9.55011 18.908 10.9974C18.908 12.455 17.9225 13.642 16.6612 13.642Z",
              fill: "rgba(88,101,242,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          onClick={() => {
            discordIconOnClick();
          }}
          {...getOverrideProps(overrides, "Discord Icon")}
        ></Icon>
        <Text
          fontFamily="Teko"
          fontSize="20px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
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
          children="Home"
          onClick={() => {
            homeOnClick();
          }}
          {...getOverrideProps(overrides, "Home")}
        ></Text>
        <Text
          fontFamily="Teko"
          fontSize="20px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
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
          children="Servers"
          onClick={() => {
            serversOnClick();
          }}
          {...getOverrideProps(overrides, "Servers")}
        ></Text>
        <Text
          fontFamily="Teko"
          fontSize="20px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
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
          children="Leader Boards"
          onClick={() => {
            leaderBoardsOnClick();
          }}
          {...getOverrideProps(overrides, "Leader Boards")}
        ></Text>
        <Text
          fontFamily="Teko"
          fontSize="20px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
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
          children="Membership"
          onClick={() => {
            patreonOnClick();
          }}
          {...getOverrideProps(overrides, "Patreon")}
        ></Text>
        <Text
          fontFamily="Teko"
          fontSize="20px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
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
          children="News"
          onClick={() => {
            newsOnClick();
          }}
          {...getOverrideProps(overrides, "News")}
        ></Text>
        <Text
          fontFamily="Teko"
          fontSize="20px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
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
          children="About Us"
          onClick={() => {
            aboutUsOnClick();
          }}
          {...getOverrideProps(overrides, "About Us")}
        ></Text>
        <Text
          fontFamily="Teko"
          fontSize="20px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
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
          children="Contact"
          onClick={() => {
            contactOnClick();
          }}
          {...getOverrideProps(overrides, "Contact")}
        ></Text>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "actions")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="Log in"
          {...getOverrideProps(overrides, "Button39481855")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Sign up"
          {...getOverrideProps(overrides, "Button39481856")}
        ></Button>
      </Flex>
    </Flex>
  );
}
