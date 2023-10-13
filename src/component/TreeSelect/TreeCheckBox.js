import { Checkbox, Label } from "@tarojs/components";

export default function TreeCheckbox({
    value,
    label,
    onChange,
    option,
    checked,
    disabled,
    dataIndex,
  }) {
    const onChangeHandler = (e) => {
      e.stopPropagation();
      const _option = { ...option, checked: !checked };
      onChange && onChange({ value, option: _option, dataIndex });
    };
  
    return (
      <Label onClick={onChangeHandler}>
        <Checkbox value={value} checked={checked} disabled={disabled}>
          {label}
        </Checkbox>
      </Label>
    );
  }