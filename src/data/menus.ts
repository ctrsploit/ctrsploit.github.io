import {
    BugOutlined,
    FlagOutlined,
    InfoCircleOutlined,
    RadarChartOutlined,
    SecurityScanOutlined
} from "@ant-design/icons-vue";
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
        label: 'Benchmark',
        key: 'benchmark',
        icon: RadarChartOutlined,
        description: 'ctrsploit vs similar tools'
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