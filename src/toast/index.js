import message from 'antd/es/message';
import 'antd/es/message/style';

message.config({maxCount: 1});

export default function toast(props) {
  const {
    type = 'success',
    text = '',
    time = 3,
    cb = () => {},
  } = props;
  const hide = message[type](text, time);
  cb(hide);
  return hide;
}