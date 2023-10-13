export default function TreeFlat(dataSource, ref) {
  const result = [];
  const arrayToTree = (data) => {
    if (data.children) {
      data.children.forEach((item) => {
        arrayToTree(item);
      });
    }
    const obj = { ...data };
    Reflect.deleteProperty(obj, "children");
    if (obj.checked) result.push(obj);
  };
  dataSource.forEach((item) => arrayToTree(item));
  return result;
}
