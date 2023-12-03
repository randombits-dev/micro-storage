import React from 'react';
import {TEST_FILE_DATA} from "../data/mockData.ts";

interface Props {
  key: string;
}

function generateChildren(items, props, slugPrefix = '') {
  return items.map((item) => {
    const slug = `${slugPrefix}/${item.name}`;
    if (item.type === 'folder') {
      return (
          <FolderView
              key={slug}
              slug={slug}
              name={item.name}
              isExpanded={item.isExpanded}
              onClick={props.handleToggleDirectory}
          >
            {generateChildren(
                item.contents,
                {...props, isExpanded: item.isExpanded},
                slug
            )}
          </FolderView>
      );
    } else {
      return (
          <FileView
              key={slug}
              file={item}
              slug={slug}
              onClick={props.handleSelectFile}
              isExpanded={props.isExpanded}
          />
      );
    }
  });
}

const FolderView = (props) => {
  const {slug, name, isExpanded, onClick} = props;
  return (
      <div className="folder" onClick={() => onClick(slug)}>
        <span className="folder-name">{name}</span>
        <span className="folder-toggle">{isExpanded ? '-' : '+'}</span>
        <div className="folder-contents">{props.children}</div>
      </div>
  );
};

const FileView = (props) => {
  const {file, slug, onClick} = props;
  return (
      <div className="file" onClick={() => onClick(slug)}>
        <span className="file-name">{file.name}</span>
        {/*<span className="file-size">{file.size}</span>*/}
      </div>
  );
};

const Sidebar = () => {

  const tree = [];
  const testData = JSON.parse(JSON.stringify(TEST_FILE_DATA));
  testData.forEach((item) => {
    console.log(item);
    if (item.parent) {
      const parent = testData.find((treeItem) => treeItem.id === item.parent);
      console.log(parent);
      (parent as any).contents = (parent as any).contents || [];
      (parent as any).contents.push(item);
      console.log(parent.contents);
    } else {
      tree.push(item);
    }
  });

  console.log(tree);

  const children = generateChildren(tree, {
    handleToggleDirectory: () => {
    },
    handleSelectFile: () => {
    },
  });

  return (
      <div>{children}</div>
  );
};

export default Sidebar;
