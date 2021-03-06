import * as React from 'react';
import { AbstractSelectProps } from '../select';

export interface TreeData {
  key: string;
  value: string;
  /**
   * @deprecated Please use `title` instead.
   */
  label?: React.ReactNode;
  title?: React.ReactNode;
  children?: TreeData[];
}

export interface TreeSelectProps extends AbstractSelectProps {
  value?: string | Array<any>;
  defaultValue?: string | Array<any>;
  multiple?: boolean;
  onSelect?: (value: any) => void;
  onChange?: (value: any, label: any) => void;
  onSearch?: (value: any) => void;
  searchPlaceholder?: string;
  dropdownStyle?: React.CSSProperties;
  treeDefaultExpandAll?: boolean;
  treeCheckable?: boolean | React.ReactNode;
  treeDefaultExpandedKeys?: Array<string>;
  filterTreeNode?: (inputValue: string, treeNode: any) => boolean | boolean;
  treeNodeFilterProp?: string;
  treeNodeLabelProp?: string;
  treeData?: Array<TreeData>;
  treeDataSimpleMode?: boolean | Object;
  loadData?: (node: any) => void;
  showCheckedStrategy?: 'SHOW_ALL' | 'SHOW_PARENT' | 'SHOW_CHILD';
  labelInValue?: boolean;
  treeCheckStrictly?: boolean;
  getPopupContainer?: (triggerNode: Element) => HTMLElement;
}
