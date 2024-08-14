import { Slider } from "@/components/ui/slider";

interface SkillSliderProps {
  label: string;
  value: number;
}

export function SkillSlider({ label, value }: SkillSliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <p className="text-2xl font-poppins font-semibold">{label}</p>
      </div>
      <Slider
        defaultValue={[value]}
        max={100}
        step={1}
        className="w-full"
        disabled
      />
    </div>
  );
}
