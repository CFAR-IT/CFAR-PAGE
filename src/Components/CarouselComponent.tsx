import { ConfigProvider, Image, Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "40rem",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function CarouselComponent() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowOffset: 60,
            arrowSize: 60,
            dotHeight: 10,
            dotWidth: 26,
            dotGap: 8,
          },
        },
      }}
    >
      <Carousel pauseOnFocus arrows infinite autoplay fade autoplaySpeed={2500}>
        <div>
          <div style={contentStyle}>
            <Image
              src="src\assets\images\dron.png"
              preview={false}
              height={"42rem"}
              width={"100%"}
            />
          </div>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
      </Carousel>
    </ConfigProvider>
  );
}
