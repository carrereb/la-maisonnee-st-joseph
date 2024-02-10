const loadContent = async function (path) {
  const fileContent = await fetch(path).then((res) => res.text());
  console.log(fileContent);
  const content = document.getElementById("main-content");
  if (!content) {
    console.error('There is no element with the id "main-content"');
    return;
  }
  content.innerHTML = fileContent;
};
