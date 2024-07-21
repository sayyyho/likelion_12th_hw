import { Content } from "../../common/Content/Content";
import { Image } from "../../common/Image/Image";
import { Text } from "../../common/Text/Text";
import { Icon } from "../../common/Icon/Icon";

export const ArticleFooter = () => {
  return (
    <Content
      width="100%"
      height="10%"
      isFlex={true}
      alignProp={"center"}
      justifyProp={"space-between"}
    >
      <Content
        width="30%"
        height="100%"
        isFlex={true}
        alignProp={"center"}
        gapProp={"5px"}
      >
        <Image
          width="20px"
          height="20px"
          src="https://velog.velcdn.com/images/sayyyho/profile/e266bd4c-486a-4fa6-a0c0-d959ba613394/image.jpg"
          borderRadius="50%"
        />
        <Text size="10px">by sayyyho</Text>
      </Content>
      <Content
        width="30%"
        height="100%"
        isFlex={true}
        alignProp={"center"}
        gapProp={"5px"}
      >
        <svg
          viewBox="0 0 24 24"
          style={{ width: "0.75rem", height: "0.75rem" }}
        >
          <path
            fill="currentColor"
            d="m18 1-6 4-6-4-6 5v7l12 10 12-10V6z"
          ></path>
        </svg>
        <Text>10</Text>
      </Content>
    </Content>
  );
};
