import axios from "axios";
import React, {useEffect, useState} from "react";
import {Col, Row} from "antd";
import PoemContiner from "@Components/PoemContainer/PoemContainer";

const RandomPoem: React.FC = () => {
  const [poem, setPoem] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://www.poemist.com/api/v1/randompoems")
      .then((data) => {
        setPoem(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Row justify="center">
      {poem.map((item, i) => (
        <Col
          key={i}
          xs={24}
          sm={16}
          md={14}
          lg={12}
          xl={20}
          xxl={8}
          style={{
            background: "#eeee",
            padding: "30px",
            marginBottom: "12px",
            borderRadius: "10px",
          }}
        >
          <PoemContiner poem={item.content} poemTitle={item.title} />
        </Col>
      ))}
    </Row>
  );
};

export default RandomPoem;
