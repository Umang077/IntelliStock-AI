import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import "./QrCodeGenerator.css";
import AddDataBaseForm from "./AddDataBaseForm";
const QRCodeGenerator = (props) => {
  const [text, setText] = useState("");
  const [value, setValue] = useState(false);
  const [saveValue, setSaveValue] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");
  console.log("towel_name", props.towel_name);

  const generateQRCode = () => {
    QRCode.toDataURL(
      `http://towel-sample-project.s3-website.ap-south-1.amazonaws.com/individualtoweldetail?towel_name=${props.towel_name}`
    )
      .then((url) => {
        setDownloadLink(url);
      })
      .catch((err) => {
        console.error(err);
      });
    setSaveValue(true);
  };
  console.log("Outside Delay function", saveValue);

  const delayFunction = () => {
    const timeoutId = setTimeout(() => {
      setValue(true);
    }, 2000);
    return () => clearTimeout(timeoutId);
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      {/* <h1>QR Code Generator</h1> */}
      <div style={{ display: "flex" }}>
        {/* <input
          type="text"
          value={props.towel_name}
          onChange={handleTextChange}
        /> */}
        {/* {!downloadLink && props.towel_name != "" && (
          <a
            className="generate_qrcode"
            style={{
              textDecoration: "none",

              padding: "0.5rem 1rem",
              whiteSpace: "nowrap",
              borderRadius: "0.3rem",
              fontSize: "1rem",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              transition: "0.2s ease-in-out",
              boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.45)",
              marginRight: "100px",
            }}
          >
            Generate QR Code
          </a>
        )} */}
      </div>
      <div>
        {!value && props.towel_name != "" && (
          <div style={{ display: "flex" }}>
            {/* <img src={downloadLink} alt="QR Code" /> */}
            <a
              className="qr_code"
              onClick={() => {
                generateQRCode();
                delayFunction();
              }}
              style={{
                textDecoration: "none",

                padding: "0.5rem 1rem",
                whiteSpace: "nowrap",
                borderRadius: "0.3rem",
                fontSize: "1rem",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                transition: "0.2s ease-in-out",
                boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.45)",
                marginRight: "100px",
              }}
              href={downloadLink}
              // download="qrcode.png"
              download={`${props.towel_name}.png`}
            >
              Download QR Code
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
