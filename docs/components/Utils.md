# 工具函数

## pdf打印方法

```javascript
/**
 * pdfViewPrint - 通用pdf打印和预览
 * @param {Object} res - 接口返回结果
 * @param {Boolean} needPrint - 是否需要打印，默认true
 * @param {Object} errorMessage - 报错信息
 */
export function pdfViewPrint(
  res,
  errorMessage = intl.get(`sslm.common.view.printwarning.noTemplate`).d("未设置打印模板，不可打印"),
  needPrint = true,
) {
  if (res?.type?.indexOf("application/json") > -1) {
    notification.warning({
      description: errorMessage,
    });
    return;
  }
  const file = new Blob([res], { type: "application/pdf" });
  const fileURL = URL.createObjectURL(file);
  const printWindow = window.open(fileURL);
  if (needPrint) {
    printWindow.print();
  }
}

// 使用示例
import { pdfViewPrint } from '@/utils/utils';
const res = await fetchPdf(params);
pdfViewPrint(res, false);
```



## 附件校验通用方法

```javascript

import notification from "utils/notification";
import { queryFileListOrg } from 'hzero-front/lib/services/api';
/**
 * 附件校验，校验每个uuid下是否有附件
 * @param {*} uuidArr - 附件uuid数组
 * @param {*} message - 校验不通过的提示语
 * @returns Boolean
 */
export async function validateAttachment(
  uuidArr,
  message = intl.get('spfm.enterprise.view.message.attach').d('附件未上传完成，请检查！')
  ) {
  const res = await Promise.all(
    uuidArr.map((attachmentUUID) =>
      queryFileListOrg({
        bucketName: 'private-bucket',
        attachmentUUID,
      }))
  );
  if (res.some(i => !i?.length)) {
    notification.warning({
      message,
    });
    return false;
  } else {
    return true;
  }
}

// 使用示例
import { validateAttachment } from '@src/utils/utils';
const flag = await validateAttachment(
  [bussinessUuid，techUuid],
  intl.get('hzero.common.notification.interceptNotnull').d('请上传必输附件！')
);
if (!flag) {
  return;
}
```



## 通用下载

```javascript
import request from 'utils/request';
import { downloadFile } from 'services/api';
/**
 * fileDownload - 通用下载，url下载，请求接口blob文件流下载
 * @param {Object} 下载参数，包括以下参数
   * @param {string} downloadUrl - 通过url下载
   * @param {string} requestUrl - 通过请求接口下载
   * @param {Object} queryParams - 请求参数
   * @param {string} fileName - 文件名
   * @param {string} fileType - 文件类型
 * @param {Boolean} isCommon - 是否使用通用下载
 */
export function fileDownload(
  { downloadUrl, requestUrl, fileName, fileType, queryParams = {} },
  isCommon
) {
  if (isCommon) {
    downloadFile({ requestUrl, queryParams });
  } else if (requestUrl) {
    // 请求并下载文件
    request(requestUrl, {
      responseType: 'blob',
      method: 'GET',
      query: queryParams,
    }).then((data) => {
      const { failed, message } = data;
      if (failed && message) {
        notification.warning({
          message,
        });
      }
      if (!failed) {
        const blob = new Blob([data], { type: data.type || fileType });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a'); // 创建a标签
        const newFileName =
          (data?.headers || {})['content-disposition']?.split(';')[1]?.split('filename=')[1] ||
          fileName;
        if (newFileName) link.setAttribute('download', newFileName);
        link.href = url;
        link.click();
        URL.revokeObjectURL(url); // 释放内存
      }
    });
  } else if (downloadUrl) {
    // 通过url下载文件
    // 创建a标签，用于跳转至下载链接
    const link = document.createElement('a');
    link.href = downloadUrl;
    if (fileName) {
      link.setAttribute('download', decodeURIComponent(fileName));
    }
    // 兼容：某些浏览器不支持HTML5的download属性
    if (typeof link.download === 'undefined') {
      link.setAttribute('target', '_blank');
    }
    link.click();
  }
}

// 使用示例
import { fileDownload } from '@/utils/utils.js';
const params = {
  requestUrl: `/ssrc/v1/${organizationId}/bid/${bidId}/bid-quotation-export`,
  fileName: intl.get(`ssrc.bidHall.view.title.bidDetailExport`).d('报价明细导出')
}
fileDownload(params)
```

