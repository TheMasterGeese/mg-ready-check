import { AbilityString, SaveType } from "@actor/types";
import type { SpellPF2e } from "@item";
import { BaseItemDataPF2e, BaseItemSourcePF2e, ItemLevelData, ItemSystemData, ItemSystemSource, ItemTraits } from "@item/data/base";
import { OneToTen, ValueAndMax, ValuesList } from "@module/data";
import { DamageType } from "@system/damage";
import { MagicSchool, MagicTradition, SpellComponent, SpellTrait } from "../types";
declare type SpellSource = BaseItemSourcePF2e<"spell", SpellSystemSource>;
declare type SpellData = Omit<SpellSource, "data" | "effects" | "flags"> & BaseItemDataPF2e<SpellPF2e, "spell", SpellSystemData, SpellSource>;
export declare type SpellTraits = ItemTraits<SpellTrait>;
declare type SpellDamageCategory = keyof ConfigPF2e["PF2E"]["damageCategories"];
export interface SpellDamageType {
    value: DamageType;
    subtype?: "persistent" | "splash";
    categories: SpellDamageCategory[];
}
export interface SpellDamage {
    value: string;
    applyMod?: boolean;
    type: SpellDamageType;
}
export interface SpellHeighteningInterval {
    type: "interval";
    interval: number;
    damage: Record<string, string>;
}
export interface SpellHeighteningFixed {
    type: "fixed";
    levels: Record<OneToTen, Partial<SpellSystemSource>>;
}
export interface SpellHeightenLayer {
    level: number;
    data: Partial<SpellSystemData>;
}
interface SpellOverlayOverride {
    _id: string;
    data: Partial<SpellSystemSource>;
    name?: string;
    overlayType: "override";
    sort: number;
}
/** Not implemented */
interface SpellOverlayDamage {
    overlayType: "damage";
    choices: DamageType[];
}
declare type SpellOverlay = SpellOverlayOverride | SpellOverlayDamage;
declare type SpellOverlayType = SpellOverlay["overlayType"];
interface SpellSystemSource extends ItemSystemSource, ItemLevelData {
    traits: SpellTraits;
    level: {
        value: OneToTen;
    };
    spellType: {
        value: keyof ConfigPF2e["PF2E"]["spellTypes"];
    };
    category: {
        value: keyof ConfigPF2e["PF2E"]["spellCategories"];
    };
    traditions: ValuesList<MagicTradition>;
    school: {
        value: MagicSchool;
    };
    components: Record<SpellComponent, boolean>;
    materials: {
        value: string;
    };
    target: {
        value: string;
    };
    range: {
        value: string;
    };
    area: {
        value: keyof ConfigPF2e["PF2E"]["areaSizes"];
        areaType: keyof ConfigPF2e["PF2E"]["areaTypes"];
    };
    time: {
        value: string;
    };
    duration: {
        value: string;
    };
    damage: {
        value: Record<string, SpellDamage>;
    };
    heightening?: SpellHeighteningFixed | SpellHeighteningInterval;
    overlays?: Record<string, SpellOverlay>;
    save: {
        basic: string;
        value: SaveType | "";
        dc?: number;
        str?: string;
    };
    sustained: {
        value: false;
    };
    cost: {
        value: string;
    };
    ability: {
        value: AbilityString;
    };
    hasCounteractCheck: {
        value: boolean;
    };
    location: {
        value: string;
        signature?: boolean;
        heightenedLevel?: number;
        /** The level to heighten this spell to if it's a cantrip or focus spell */
        autoHeightenLevel?: OneToTen | null;
        /** Number of uses if this is an innate spell */
        uses?: ValueAndMax;
    };
}
interface SpellSystemData extends SpellSystemSource, ItemSystemData {
    traits: SpellTraits;
}
export { SpellData, SpellSource, SpellSystemData, SpellSystemSource, SpellOverlay, SpellOverlayType };
