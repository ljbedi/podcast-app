const removeHtml = (content) => {
  const regex = /<[^>]*>|^(.*?\.)|[^.]+$/g;
  const result = content.replace(regex, '$1');

  return result
}
export default removeHtml