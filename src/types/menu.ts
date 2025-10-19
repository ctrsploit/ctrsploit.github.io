import type {FunctionalComponent} from "vue";
import {h} from "vue";
import type {AntdIconProps} from "@ant-design/icons-vue/lib/components/AntdIcon";
import type {ItemType} from "ant-design-vue";

type IconType = FunctionalComponent<AntdIconProps>;

export interface MyMenu {
    index?: number;
    key: string;
    label: string;
    icon?: IconType;
    description?: string;
    children?: MyMenu[];
}

export function MyMenu2AntdItemType(item: MyMenu): ItemType {
    const children = item.children?.map(child => MyMenu2AntdItemType(child));

    return {
        label: item.label,
        key: item.key,
        icon: item.icon ? h(item.icon) : undefined,
        children: children,
    };
}