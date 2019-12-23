import React, { Component } from 'react';
import files from './listfile.json';

import FileNode from './fileNode';

class file extends Component {
    render() {
        return (
            <div>
                {/* 第一種撈資料方式 */}
                {/* <FileNode name={files.name} files={files.files} /> */}
                {/* 需要裡面的name跟files */}
                <FileNode {...files} />
            </div>
        );
    }
}

export default file;