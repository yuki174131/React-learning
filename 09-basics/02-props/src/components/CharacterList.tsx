import type { FC } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';

export interface Character {
  id: number;
  name: string;
  grade: number;
  height?: number;
}

// 一般的にはオブジェクトの型はインターフェースで定義することが推奨されてるが、React コンポーネ ントの props と state については型エイリアスを使うようにしてる
// インターフェースのように宣言のマ ージがないのでうっかり拡張しづらく、型を合成した場合にも視覚的にわかりやすい
type Props = {
  school: string;
  characters: Character[];
};

// 関数コンポーネントでは、レンダリングしたい内容を戻り値として return で返す。 FunctionComponent 型で戻り値の型として定義されてるのは ReactElement オブジェクトまたは null
const CharacterList: FC<Props> = (props) => {
  const { school, characters } = props;

  return (
    <div>
      <Heading size="md" as="h2">
        {school}
      </Heading>
      <List my={8}>
        {characters.map((character) => (
          // JSX で要素をループ処 理によって記述する場合、各要素にユニークな値を key 属性として設定しなければならない
          // たしか仮想 DOM の差分検出処理のために並んでるコンポーネントを一意に特定するために必要
          <ListItem key={character.id} m={6}>
            <Flex>
              <Avatar size="md" bg="teal.500" />
              <Box textAlign="left" ml={3}>
                <Text>{character.name}</Text>
                <Text as="span">{character.grade}年生</Text>
                <Text as="span" ml={2}>
                  {/* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions */}
                  {/* 三項演算で undefined だった場合は 文字列 ??? を変わりに表示するようにしてる */}
                  {character.height ? character.height : '???'}
                  cm
                </Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CharacterList;
