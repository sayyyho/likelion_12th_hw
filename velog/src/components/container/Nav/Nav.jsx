import * as S from "./Nav.styled";
import { Content } from "../../common/Content/Content";
import { Icon } from "../../common/Icon/Icon";
import { Text } from "../../common/Text/Text";
export const Nav = () => {
  return (
    <S.Nav>
      <Content
        width="250px"
        height="50px"
        isFlex={true}
        alignProp={"center"}
        justifyProp={"space-between"}
      >
        <Content width="30%" isFlex={true} alignProp={"center"} gapProp="5px">
          <Icon
            d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
            viewBox="0 0 24 24"
          />
          <Text color="black" size="1rem">
            트렌딩
          </Text>
        </Content>
        <Content width="30%" isFlex={true} alignProp={"center"} gapProp="5px">
          <Icon
            d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
            viewBox="0 0 24 24"
          />
          <Text color="black" size="1rem">
            최신
          </Text>
        </Content>
        <Content width="30%" isFlex={true} alignProp={"center"} gapProp="5px">
          <Icon
            viewBox="0 0 24 24"
            d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"
          />
          <Text color="black" size="1rem">
            피드
          </Text>
        </Content>
      </Content>
      <Content
        width="135px"
        height="50px"
        isFlex={true}
        alignProp={"center"}
        justifyProp={"space-between"}
      >
        <Content
          width="100px"
          height="35px"
          isFlex={true}
          alignProp={"center"}
          justifyProp={"space-between"}
          background="white"
          shadow="0 0 4px rgba(0,0,0,.05)"
        >
          <Text>이번 주</Text>
          <Icon d="M7 10l5 5 5-5z" />
        </Content>
        <Icon d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></Icon>
      </Content>
    </S.Nav>
  );
};
