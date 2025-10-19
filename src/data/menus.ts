import {BugOutlined, FlagOutlined, InfoCircleOutlined, SecurityScanOutlined} from "@ant-design/icons-vue";
import type {MyMenu} from "@/types/menu";
import {MyMenu2AntdItemType} from "@/types/menu";
import type {ItemType} from "ant-design-vue";

const menus: MyMenu[] = [
    {
        label: 'Vulnerability',
        key: 'vul',
        icon: BugOutlined,
        description: 'vulnerabilities list supported by ctrsploit',
    },
    {
        label: 'CheckSec',
        key: 'checksec',
        icon: SecurityScanOutlined,
        description: 'check whether vulnerability exists',
    },
    {
        label: 'Env',
        key: 'env',
        icon: InfoCircleOutlined,
        description: 'collect environment information'
    },
    {
        label: 'Roadmap',
        key: 'roadmap',
        icon: FlagOutlined,
        description: 'development progress'
    }
];

const antdMenus: ItemType[] = menus.map(MyMenu2AntdItemType);

export {menus, antdMenus};