import { MakeRequestAsync } from "./axios";
import { POST } from "../constants/request-type";
import { upload, create_upload_web } from "../constants/routes";
import { service_upload } from "../constants/url";

const uploadFile = async (data) => {
  const file = new FormData();
  file.append("file", data);

  const request_details = {
    type: POST,
    url: service_upload,
    route: upload + "/" + create_upload_web,
    data: file,
    token: sessionStorage.getItem("auth_token")
  };

  const response = await MakeRequestAsync(request_details);
  return response;
};

export { uploadFile };
