import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Tooltip, Modal, message, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const GroupButton = ({
    text,
    handleEdit,
    handleDelete,
    setSelectedItemForEdit,
    setSelectedItemForDelete,
    setShowDeleteModal,
    setShowModal,
    setMode,
    setModalTitle,
    viewProfile,
    setPage
}) =>
{
    return (
        <div key={`${text}`}>
          <Space>
          <Tooltip title="Edit" placement="top">
            <button onClick={() => {
              setModalTitle('Edit Rank')
              setSelectedItemForEdit(text);
              setMode('edit');
              setShowModal(true);
            }}
            type="button"
            className="btn btn-warning">Edit</button>
          </Tooltip>
          <Tooltip title="Delete" placement="top">
            <button
              onClick={() => {
                handleDelete(text);
              }}
              type="button"
              className="btn btn-danger">Delete</button>
          </Tooltip>
          { setPage == "crew" && (
            <Tooltip title="View Profile" placement="top">
              <button
                onClick={() => {
                  viewProfile(text);
                }}
                type="button"
                className="btn btn-primary">View Profile</button>
            </Tooltip>
          )}
          { setPage == "document" && (
            <Tooltip title="Select this document" placement="top">
              <button
                onClick={() => {
                  viewProfile(text);
                }}
                type="button"
                className="btn btn-primary">Select this document</button>
            </Tooltip>
          )}
          </Space>
        </div>
    );
}

export default GroupButton;
