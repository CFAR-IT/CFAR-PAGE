import "./App.css";
import { Layout, Menu, Tooltip, Flex, Button, Image } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import HeroComponent from "./Components/HeroComponent";
import CarouselComponent from "./Components/CarouselComponent";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
//ASDasd
const { Header, Content, Footer } = Layout;

const items: { key: number; label: string }[] = [
  { key: 1, label: "Productos" },
  { key: 2, label: "Descubre" },
  { key: 3, label: "Servicio y Soporte" },
  { key: 4, label: "Sobre Nostros" },
];

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Header className="header">
        <Image
          src="src\assets\images\cfar-logo.png"
          preview={false}
          width={"10%"}
          height={"100%"}
        />
        <Menu
          mode="horizontal"
          theme="dark"
          defaultSelectedKeys={["2"]}
          items={items}
          className="header-menu"
        />

        <Flex
          gap={"3rem"}
          style={{ width: "30%", padding: "2rem 5rem 2rem 0" }}
          justify="end"
        >
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary">Contactanos</Button>
          {/* <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
            }}
          /> */}
        </Flex>
      </Header>
      <Content>
        <div style={{ marginTop: "10vh" }}>
          <CarouselComponent />
          <HeroComponent />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          marginTop: "50px",
          backgroundColor: "#282D3F",
          height: "20vh",
        }}
      ></Footer>
    </Layout>
  );
}

export default App;
