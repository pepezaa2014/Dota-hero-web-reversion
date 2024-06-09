import { PrimaryAttr } from "@/src/client/constants/primary-attr";

interface HeroProps {
  id?: number;
  name?: string;
  localized_name?: string;
  primary_attr: PrimaryAttr;
  attack_type?: string;
  roles?: string[];
  img?: string;
  icon?: string;
  base_health?: number;
  base_health_regen?: number;
  base_mana?: number;
  base_mana_regen?: number;
  base_armor?: number;
  base_mr?: number;
  base_attack_min?: number;
  base_attack_max?: number;
  base_str?: number;
  base_agi?: number;
  base_int?: number;
  str_gain?: number;
  agi_gain?: number;
  int_gain?: number;
  attack_range?: number;
  projectile_speed?: number;
  attack_rate?: number;
  move_speed?: number;
  turn_rate?: number;
  cm_enabled?: boolean;
  legs?: number;
  [key: string]: any;
}

class Hero implements HeroProps {
  id?: number;
  name?: string;
  localized_name?: string;
  primary_attr!: PrimaryAttr;
  attack_type?: string;
  roles?: string[];
  img?: string;
  icon?: string;
  base_health?: number;
  base_health_regen?: number;
  base_mana?: number;
  base_mana_regen?: number;
  base_armor?: number;
  base_mr?: number;
  base_attack_min?: number;
  base_attack_max?: number;
  base_str?: number;
  base_agi?: number;
  base_int?: number;
  str_gain?: number;
  agi_gain?: number;
  int_gain?: number;
  attack_range?: number;
  projectile_speed?: number;
  attack_rate?: number;
  move_speed?: number;
  turn_rate?: number;
  cm_enabled?: boolean;
  legs?: number;
  [key: string]: any;

  constructor(props: HeroProps) {
    Object.assign(this, props);
  }

  health(): number {
    return (this.base_health ?? 0) + (this.base_str ?? 0) * 20;
  }
  healthRegen(): number {
    return (this.base_health_regen ?? 0) + (this.base_str ?? 0) * 0.1;
  }

  mana(): number {
    return (this.base_mana ?? 0) + (this.base_int ?? 0) * 12;
  }

  manaRegen(): number {
    return (this.base_mana_regen ?? 0.0) + (this.base_int ?? 0) * 0.05;
  }

  armor(): number {
    return (this.base_armor ?? 0.0) + (this.base_agi ?? 0) * 0.167;
  }

  attackMin(): number {
    switch (this.primary_attr) {
      case PrimaryAttr.Strength:
        return (this.base_attack_min ?? 0.0) + (this.base_str ?? 0);
      case PrimaryAttr.Agility:
        return (this.base_attack_min ?? 0.0) + (this.base_agi ?? 0);
      case PrimaryAttr.Intelligence:
        return (this.base_attack_min ?? 0.0) + (this.base_int ?? 0);
      case PrimaryAttr.Universal:
        return (
          (this.base_attack_min ?? 0.0) +
          (this.base_str ?? 0) * 0.6 +
          (this.base_agi ?? 0) * 0.6 +
          (this.base_int ?? 0) * 0.6
        );
      default:
        return this.base_attack_min ?? 0.0;
    }
  }

  attackMax(): number {
    switch (this.primary_attr) {
      case PrimaryAttr.Strength:
        return (this.base_attack_max ?? 0.0) + (this.base_str ?? 0);
      case PrimaryAttr.Agility:
        return (this.base_attack_max ?? 0.0) + (this.base_agi ?? 0);
      case PrimaryAttr.Intelligence:
        return (this.base_attack_max ?? 0.0) + (this.base_int ?? 0);
      case PrimaryAttr.Universal:
        return (
          (this.base_attack_max ?? 0.0) +
          (this.base_str ?? 0) * 0.6 +
          (this.base_agi ?? 0) * 0.6 +
          (this.base_int ?? 0) * 0.6
        );
      default:
        return this.base_attack_max ?? 0.0;
    }
  }
}

export default Hero;
