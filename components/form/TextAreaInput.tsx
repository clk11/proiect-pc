
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

import React from "react";

export default function TextAreaInput({
  name,
  labelText,
  defaultValue,
}: TextAreaInputProps) {
  return (
    <div className="mb-2 flex gap-2 flex-col">
      <Label htmlFor={name} className="text-center">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className="leading-loose"
      />
    </div>
  );
}
