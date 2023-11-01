import { Input } from "../atoms/Input/Input";
import { PrimaryButton } from "../atoms/button/PrimaryButton"

export const SearchInput = () => {
  return (
    <div>
      <Input placeholder="検索条件を入力" />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  )
};