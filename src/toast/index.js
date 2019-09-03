import message from 'antd/es/message';
import 'antd/es/message/style';

export default function toast(props) {
  const {
    type = 'success',
    text = '',
    time = 3,
    maxCount = 1,
    config = {},
    cb = () => {},
  } = props;
  message.config({maxCount, ...config});
  const hide = message[type](text, time);
  cb(hide);
  return hide;
}