export interface SpaceStateType {
  space: SpaceType;
  currentDir: string;
}

/**
 * 空间类型（扁平）
 */
export interface SpaceType {
  [dir: string]: SpaceItemType;
}

/**
 * 空间项类型
 */
export interface SpaceItemType {
  // 条目 / 目录名
  name: string;
  link?: string;
  // 所属目录
  dir: string;
  type: "dir" | "link";
}

/**
 * 返回值类型
 */
export interface ResultType {
  result: boolean;
  message?: string;
}
