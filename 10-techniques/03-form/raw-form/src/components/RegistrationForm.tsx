import type { FC, ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';

const genderCode = {
  f: '女性',
  m: '男性',
  n: 'それ以外',
} as const;

interface FormData {
  username: string;
  zipcode?: string;
  gender?: keyof typeof genderCode;
  isAgreed: boolean;
}

// フォーム全体の値を FormData 型のオブジェクトにして state として持ち回る
const RegistrationForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    isAgreed: false,
  });

  const handleSubmit = (event: SyntheticEvent) => {
    // イベント本来の振る舞いを阻止。action 属性で指定されているURL、それがなければ現在のURLにフォームの値がPOSTで送られてページが遷移する。
    event.preventDefault();
    console.log(formData);
  };

  // 受け取ったイベントのターゲットの種類によって抽出する値を振り分け、それを setFormData に渡して state を更新してる
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name } = event.target;
    const value =
      event.target.type === 'checkbox'
        ? (event.target as HTMLInputElement).checked
        : event.target.value;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  return (
    <Box p={3} w="md" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="username" mt={2}>
          ユーザー名
        </FormLabel>
        <Input
          name="username"
          size="md"
          value={formData.username}
          onChange={handleChange}
        />
        <FormLabel htmlFor="zipcode" mt={4}>
          郵便番号
        </FormLabel>
        <Input
          name="zipcode"
          size="md"
          maxLength={7}
          value={formData.zipcode ?? ''}
          onChange={handleChange}
        />
        <Select
          name="gender"
          my={6}
          placeholder="性別を選択…"
          value={formData.gender}
          onChange={handleChange}
        >
          {Object.entries(genderCode).map(([code, name]) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </Select>
        <Checkbox
          name="isAgreed"
          isChecked={formData.isAgreed}
          onChange={handleChange}
        >
          規約に同意する
        </Checkbox>
        <ButtonGroup my={3} w="xs">
          <Button w="30%" colorScheme="orange" variant="solid" type="reset">
            リセット
          </Button>
          <Button w="70%" colorScheme="blue" variant="solid" type="submit">
            送信
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
};

export default RegistrationForm;
