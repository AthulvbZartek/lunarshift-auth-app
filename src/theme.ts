import { theme } from 'antd';

export const customTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: '#3779BC',
    colorBgContainer: '#ffffff',
    colorBgLayout: '#f5f7fa',
    colorText: '#3D3D3D',
  },
  components: {
    Button: {
      colorPrimary: '#3779BC',
      algorithm: true,
      controlItemBgHover: 'linear-gradient(to right top, #3779BC, #336699, #295985)',
      controlItemBgActive: 'linear-gradient(to right top, #3779BC, #336699, #295985)',
    },
    Menu: {
      colorItemBgSelected: '#d8e7f7',
      colorItemTextSelected: '#3779BC',
      colorItemIconSelected: '#3779BC',
    },
  },
}; 