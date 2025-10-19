import {BugOutlined, FlagOutlined, InfoCircleOutlined, SecurityScanOutlined} from "@ant-design/icons-vue";
import {ItemType} from "ant-design-vue";

const menu: ItemType = [
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

export {menu};