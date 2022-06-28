import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = '小旗欧飞电子商务有限公司 版权所有'

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`Copyright ${currentYear} ${defaultMessage}`}
    />
  );
};

export default Footer;
