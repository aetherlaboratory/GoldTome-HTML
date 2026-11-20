/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backup-restore/components/BackupListPanel.js":
/*!**********************************************************!*\
  !*** ./src/backup-restore/components/BackupListPanel.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_backupApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/backupApi */ "./src/backup-restore/utils/backupApi.js");
/* harmony import */ var _utils_restoreApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/restoreApi */ "./src/backup-restore/utils/restoreApi.js");
/* harmony import */ var _BackupTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BackupTable */ "./src/backup-restore/components/BackupTable.js");
/* harmony import */ var _CreateBackupModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateBackupModal */ "./src/backup-restore/components/CreateBackupModal.js");
/* harmony import */ var _RestoreModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RestoreModal */ "./src/backup-restore/components/RestoreModal.js");
/* harmony import */ var _RestoreOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RestoreOverlay */ "./src/backup-restore/components/RestoreOverlay.js");

/**
 * Backup List Panel - Main Component
 */








const BackupListPanel = () => {
  const [backups, setBackups] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [showCreateModal, setShowCreateModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showRestoreModal, setShowRestoreModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [restoreInProgress, setRestoreInProgress] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [restoreId, setRestoreId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [restoreBackupType, setRestoreBackupType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("all");

  // Fetch backups
  const fetchBackups = async () => {
    setLoading(true);
    const result = await (0,_utils_backupApi__WEBPACK_IMPORTED_MODULE_3__.listBackups)();
    if (result.success) {
      setBackups(result.data || []);
    }
    setLoading(false);
  };

  // Check restore status on mount
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchBackups();
    checkRestoreStatusOnMount();
  }, []);
  const checkRestoreStatusOnMount = async () => {
    const result = await (0,_utils_restoreApi__WEBPACK_IMPORTED_MODULE_4__.checkRestoreStatus)();
    if (result.success && result.data.in_progress) {
      setRestoreInProgress(true);
      setRestoreId(result.data.restore_id);
      startRestoreProgressPolling(result.data.restore_id);
    }
  };
  const startRestoreProgressPolling = id => {
    // Progress polling is handled in RestoreOverlay
    setRestoreId(id);
  };
  const handleCreateBackup = () => {
    fetchBackups();
  };
  const handleRestore = async backup => {
    if (window.confirm("⚠️ WARNING: This will replace your current site with this backup.\n\n" + "This action cannot be undone. All current data will be overwritten.\n\n" + "Are you absolutely sure you want to continue?")) {
      // Show modal immediately with temporary ID
      setRestoreInProgress(true);
      setRestoreId("temp_" + Date.now()); // Temporary ID to show modal immediately
      // Set backup type immediately from backup object
      setRestoreBackupType(backup.backup_type || "all");
      try {
        const result = await (0,_utils_restoreApi__WEBPACK_IMPORTED_MODULE_4__.startRestore)(backup.path || backup.file_path);
        if (result.success && result.data && result.data.restore_id) {
          // Update with real restore ID from response
          setRestoreId(result.data.restore_id);
        } else {
          setRestoreInProgress(false);
          setRestoreId(null);
          setRestoreBackupType("all");
          alert("Failed to start restore: " + (result.data || "Unknown error"));
        }
      } catch (error) {
        setRestoreInProgress(false);
        setRestoreId(null);
        setRestoreBackupType("all");
        console.error("Restore error:", error);
        alert("Error starting restore: " + error.message);
      }
    }
  };
  const handleRestoreFromFile = async (filePath, options = {}) => {
    // Show overlay immediately with temp ID (same as list restore) so user sees progress
    setRestoreInProgress(true);
    setRestoreId("temp_" + Date.now());
    setRestoreBackupType(options.backup_type || "all");
    try {
      const result = await (0,_utils_restoreApi__WEBPACK_IMPORTED_MODULE_4__.startRestore)(filePath, options);
      if (result.success && result.data && result.data.restore_id) {
        setRestoreId(result.data.restore_id);
      } else {
        setRestoreInProgress(false);
        setRestoreId(null);
        setRestoreBackupType("all");
        alert("Failed to start restore: " + (result.data || "Unknown error"));
      }
    } catch (error) {
      setRestoreInProgress(false);
      setRestoreId(null);
      setRestoreBackupType("all");
      console.error("Restore error:", error);
      alert("Error starting restore: " + error.message);
    }
  };
  const handleRestoreComplete = () => {
    setRestoreInProgress(false);
    setRestoreId(null);
    setRestoreBackupType("all");
    // Refresh backups list after restore completes
    fetchBackups();
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "backup-restore-panel w-full"
  }, !loading && backups.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: {
      margin: 0
    }
  }, "Backup files"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: "flex",
      gap: "8px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-primary",
    onClick: () => setShowCreateModal(true)
  }, "Create New Backup"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-secondary",
    onClick: () => setShowRestoreModal(true)
  }, "Restore from File"))), loading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      textAlign: "center",
      padding: "40px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BackupTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
    backups: backups,
    onRestore: handleRestore,
    onRefresh: fetchBackups,
    onShowCreateModal: setShowCreateModal,
    onShowRestoreModal: setShowRestoreModal
  }), showCreateModal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CreateBackupModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: showCreateModal,
    onClose: () => setShowCreateModal(false),
    onBackupCreated: handleCreateBackup
  }), showRestoreModal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RestoreModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: showRestoreModal,
    onClose: () => setShowRestoreModal(false),
    onRestoreStart: handleRestoreFromFile
  }), restoreInProgress && restoreId && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RestoreOverlay__WEBPACK_IMPORTED_MODULE_8__["default"], {
    restoreId: restoreId,
    backupType: restoreBackupType,
    onComplete: handleRestoreComplete
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackupListPanel);

/***/ }),

/***/ "./src/backup-restore/components/BackupRow.js":
/*!****************************************************!*\
  !*** ./src/backup-restore/components/BackupRow.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_backupApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/backupApi */ "./src/backup-restore/utils/backupApi.js");

/**
 * Backup Row Component
 */


const BackupRow = ({
  backup,
  onRestore,
  onDelete,
  onRefresh
}) => {
  const formatFileSize = bytes => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };
  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };
  const getBackupTypeTags = type => {
    const tags = [];
    if (type === 'all' || type === 'database') {
      tags.push('Database');
    }
    if (type === 'all' || type === 'files') {
      tags.push('Files');
    }

    // Fallback if type is not recognized
    if (tags.length === 0) {
      tags.push('Database', 'Files');
    }
    return tags;
  };
  const getTagStyle = tagName => {
    const baseStyle = {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 600,
      display: 'inline-block'
    };
    if (tagName === 'Database') {
      return {
        ...baseStyle,
        backgroundColor: '#ffe7ba',
        color: '#7b3c2a'
      };
    } else if (tagName === 'Files') {
      return {
        ...baseStyle,
        backgroundColor: '#f3e5f5',
        color: '#5a390d'
      };
    }
    return baseStyle;
  };
  const handleRestore = () => {
    // No confirmation here - BackupListPanel handles it
    onRestore(backup);
  };
  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete "${backup.name}"?\n\n` + 'This action cannot be undone.')) {
      const result = await (0,_utils_backupApi__WEBPACK_IMPORTED_MODULE_2__.deleteBackup)(backup.id || backup.name);
      if (result.success) {
        onRefresh();
      } else {
        alert('Failed to delete backup: ' + (result.data || 'Unknown error'));
      }
    }
  };
  const handleDownload = () => {
    (0,_utils_backupApi__WEBPACK_IMPORTED_MODULE_2__.downloadBackup)(backup.id || backup.name);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    style: {
      padding: '12px'
    }
  }, backup.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    style: {
      padding: '12px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      gap: '6px',
      flexWrap: 'wrap'
    }
  }, getBackupTypeTags(backup.backup_type || 'all').map(tag => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    key: tag,
    style: getTagStyle(tag)
  }, tag)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    style: {
      padding: '12px'
    }
  }, formatDate(backup.created_at)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    style: {
      padding: '12px'
    }
  }, formatFileSize(backup.size)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    style: {
      padding: '12px',
      fontSize: '12px',
      color: '#666'
    }
  }, "WP ", backup.wp_version, " | PHP ", backup.php_version), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    style: {
      padding: '12px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center gap-md"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-secondary !text-footnote py-xsm px-sm !flex !leading-none items-center",
    onClick: handleDownload
  }, "Download"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-primary !text-footnote py-xsm px-sm !flex !leading-none items-center",
    onClick: handleRestore
  }, "Restore"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-secondary !text-footnote py-xsm px-sm !flex !leading-none items-center !border-danger !text-danger",
    onClick: handleDelete
  }, "Delete"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackupRow);

/***/ }),

/***/ "./src/backup-restore/components/BackupTable.js":
/*!******************************************************!*\
  !*** ./src/backup-restore/components/BackupTable.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BackupRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackupRow */ "./src/backup-restore/components/BackupRow.js");

/**
 * Backup Table Component
 */

const BackupTable = ({
  backups,
  onRestore,
  onRefresh,
  onShowCreateModal,
  onShowRestoreModal
}) => {
  if (backups.length === 0) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "border border-dashed border-border w-full p-lg text-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "mb-sm"
    }, "No backups found"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Create your first backup to get started."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex gap-md justify-center p-md"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "button-primary",
      onClick: () => onShowCreateModal(true)
    }, "Create New Backup"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "button-secondary",
      onClick: () => onShowRestoreModal(true)
    }, "Restore from File")));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: '4px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    style: {
      backgroundColor: '#f5f5f5',
      borderBottom: '2px solid #ddd'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      padding: '12px',
      textAlign: 'left',
      fontWeight: 600
    }
  }, "Backup Name"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      padding: '12px',
      textAlign: 'left',
      fontWeight: 600
    }
  }, "Type"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      padding: '12px',
      textAlign: 'left',
      fontWeight: 600
    }
  }, "Date Created"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      padding: '12px',
      textAlign: 'left',
      fontWeight: 600
    }
  }, "Size"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      padding: '12px',
      textAlign: 'left',
      fontWeight: 600
    }
  }, "Site Info"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      padding: '12px',
      textAlign: 'left',
      fontWeight: 600
    }
  }, "Actions"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, backups.map((backup, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BackupRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: backup.id || backup.name || index,
    backup: backup,
    onRestore: onRestore,
    onDelete: () => {} // Handled in BackupRow
    ,
    onRefresh: onRefresh
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackupTable);

/***/ }),

/***/ "./src/backup-restore/components/CreateBackupModal.js":
/*!************************************************************!*\
  !*** ./src/backup-restore/components/CreateBackupModal.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_backupApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/backupApi */ "./src/backup-restore/utils/backupApi.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressBar */ "./src/backup-restore/components/ProgressBar.js");

/**
 * Create Backup Modal Component
 */




const CreateBackupModal = ({
  isOpen,
  onClose,
  onBackupCreated
}) => {
  const [backupName, setBackupName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [backupType, setBackupType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('all'); // 'all', 'database', 'files'
  const [excludeCache, setExcludeCache] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [excludeNodeModules, setExcludeNodeModules] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [isCreating, setIsCreating] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [progress, setProgress] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [status, setStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [backupId, setBackupId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isOpen) {
      // Reset state when modal closes
      setBackupName('');
      setBackupType('all');
      setExcludeCache(true);
      setExcludeNodeModules(true);
      setIsCreating(false);
      setProgress(0);
      setStatus('');
      setBackupId(null);
      setError(null);
    }
  }, [isOpen]);

  // Poll for progress with much less frequent calls
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isCreating || !backupId) return;
    let lastProgress = -1;
    let lastStatus = '';
    let lastMessage = '';
    let timeoutId = null;
    let isPolling = true;
    const BASE_INTERVAL = 8000; // 8 seconds base interval (much less frequent)
    const MAX_INTERVAL = 30000; // 30 seconds max interval
    let currentInterval = BASE_INTERVAL;
    let noChangeCount = 0;
    const pollProgress = async () => {
      if (!isPolling) return;
      try {
        const result = await (0,_utils_backupApi__WEBPACK_IMPORTED_MODULE_3__.getBackupProgress)(backupId);
        if (result.success && result.data) {
          const progressData = result.data;
          const currentProgress = progressData.progress || 0;
          const currentStatus = progressData.status || '';
          const currentMessage = progressData.message || '';

          // Only update if something actually changed
          const hasChanged = currentProgress !== lastProgress || currentStatus !== lastStatus || currentMessage !== lastMessage;
          if (hasChanged) {
            setProgress(currentProgress);
            setStatus(currentMessage || 'Processing...');
            lastProgress = currentProgress;
            lastStatus = currentStatus;
            lastMessage = currentMessage;
            // Reset to base interval when progress changes
            currentInterval = BASE_INTERVAL;
            noChangeCount = 0;
          } else {
            // Progress hasn't changed, increase interval gradually
            noChangeCount++;
            if (noChangeCount > 2) {
              currentInterval = Math.min(MAX_INTERVAL, currentInterval + 5000);
            }
          }
          if (progressData.status === 'completed') {
            isPolling = false;
            if (timeoutId) clearTimeout(timeoutId);
            setIsCreating(false);
            if (onBackupCreated) {
              onBackupCreated();
            }
            setTimeout(() => {
              onClose();
            }, 2000);
            return;
          } else if (progressData.status === 'error' || progressData.status === 'cancelled') {
            isPolling = false;
            if (timeoutId) clearTimeout(timeoutId);
            setIsCreating(false);
            setError(progressData.message || (progressData.status === 'cancelled' ? 'Backup cancelled' : 'Backup failed'));
            return;
          }
        } else {
          // If no progress data, show initializing
          setStatus('Initializing backup...');
          setProgress(0);
        }

        // Schedule next poll with current interval
        if (isPolling) {
          timeoutId = setTimeout(pollProgress, currentInterval);
        }
      } catch (error) {
        console.error('Error polling backup progress:', error);
        setStatus('Checking progress...');
        // Continue polling even on error, but with much longer interval
        if (isPolling) {
          currentInterval = Math.min(MAX_INTERVAL, currentInterval + 10000);
          timeoutId = setTimeout(pollProgress, currentInterval);
        }
      }
    };

    // Start polling after initial delay (don't poll immediately)
    timeoutId = setTimeout(pollProgress, BASE_INTERVAL);
    return () => {
      isPolling = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isCreating, backupId, onBackupCreated, onClose]);
  const handleCreateBackup = async () => {
    setIsCreating(true);
    setError(null);
    setProgress(0);
    setStatus('Starting backup...');
    const exclude = [];
    if (excludeCache) exclude.push('cache');
    if (excludeNodeModules) exclude.push('node_modules');
    try {
      const result = await (0,_utils_backupApi__WEBPACK_IMPORTED_MODULE_3__.createBackup)({
        name: backupName.trim() || '',
        // Send empty string if no name provided
        type: backupType,
        // 'all', 'database', or 'files'
        exclude: exclude
      });
      if (result.success && result.data && result.data.backup_id) {
        setBackupId(result.data.backup_id);
        setStatus('Initializing backup...');
        // Progress polling will start automatically via useEffect
      } else {
        setIsCreating(false);
        setError(result.data || 'Failed to start backup');
      }
    } catch (err) {
      setIsCreating(false);
      setError('Failed to start backup: ' + err.message);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: "Create New Backup",
    onRequestClose: !isCreating ? onClose : undefined,
    isDismissible: !isCreating,
    size: "medium"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "py-lg"
  }, !isCreating ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Backup Name (optional)",
    value: backupName,
    onChange: setBackupName,
    placeholder: "backup-2024-01-01",
    help: "Leave empty for auto-generated name"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '20px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: {
      marginBottom: '12px',
      fontSize: '14px',
      fontWeight: 600
    }
  }, "Backup Type"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    name: "backupType",
    value: "all",
    checked: backupType === 'all',
    onChange: e => setBackupType(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "All")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    name: "backupType",
    value: "database",
    checked: backupType === 'database',
    onChange: e => setBackupType(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Database Only")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    name: "backupType",
    value: "files",
    checked: backupType === 'files',
    onChange: e => setBackupType(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Files Only (Plugins, Themes, Media uploads)")))), backupType !== 'database' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '20px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: {
      marginBottom: '12px',
      fontSize: '14px',
      fontWeight: 600
    }
  }, "Exclude Options"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: "Exclude cache directories",
    checked: excludeCache,
    onChange: setExcludeCache
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: "Exclude node_modules",
    checked: excludeNodeModules,
    onChange: setExcludeNodeModules
  })), error && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '16px',
      padding: '12px',
      backgroundColor: '#ffeaea',
      color: '#d63638',
      borderRadius: '4px'
    }
  }, error), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '24px',
      display: 'flex',
      gap: '8px',
      justifyContent: 'flex-end'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-secondary",
    onClick: onClose
  }, "Cancel"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-primary",
    onClick: handleCreateBackup
  }, "Create Backup"))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      textAlign: 'center',
      padding: '20px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ProgressBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: progress,
    label: status || 'Starting backup...'
  }), error && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '16px',
      padding: '12px',
      backgroundColor: '#ffeaea',
      color: '#d63638',
      borderRadius: '4px'
    }
  }, error), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '24px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    isDestructive: true,
    onClick: async () => {
      if (window.confirm('Are you sure you want to cancel this backup? The process will stop and any partial backup will be cleaned up.')) {
        if (backupId) {
          await (0,_utils_backupApi__WEBPACK_IMPORTED_MODULE_3__.cancelBackup)(backupId);
        }
        setIsCreating(false);
        setBackupId(null);
        setProgress(0);
        setStatus('');
      }
    }
  }, "Cancel Backup")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateBackupModal);

/***/ }),

/***/ "./src/backup-restore/components/ProgressBar.js":
/*!******************************************************!*\
  !*** ./src/backup-restore/components/ProgressBar.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * Reusable Progress Bar Component
 */

const ProgressBar = ({
  value = 0,
  label = '',
  showPercentage = true
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "progress-bar-container flex flex-col justify-center !items-center w-full"
  }, label && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '8px',
      fontSize: '14px',
      fontWeight: 500
    }
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ProgressBar, {
    value: value,
    className: "custom-progress-bar min-w-full"
  }), showPercentage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '8px',
      fontSize: '12px',
      color: '#666'
    }
  }, Math.round(value), "%"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);

/***/ }),

/***/ "./src/backup-restore/components/RestoreModal.js":
/*!*******************************************************!*\
  !*** ./src/backup-restore/components/RestoreModal.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_restoreApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/restoreApi */ "./src/backup-restore/utils/restoreApi.js");

/**
 * Restore Modal Component
 */



const RestoreModal = ({
  isOpen,
  onClose,
  onRestoreStart
}) => {
  const [file, setFile] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [uploading, setUploading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [uploadProgress, setUploadProgress] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [uploadedData, setUploadedData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [migrateUrls, setMigrateUrls] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  // Get current site URL (from WordPress)
  const currentSiteUrl = backupRestore.siteUrl || '';
  const handleFileSelect = async e => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.name.endsWith('.wpress')) {
        setFile(selectedFile);
        setError(null);
        // Automatically start upload and restore
        await handleUpload(selectedFile);
      } else {
        setError('Please select a .wpress file');
        setFile(null);
      }
    }
  };
  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = async e => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.name.endsWith('.wpress')) {
      setFile(droppedFile);
      setError(null);
      // Automatically start upload and restore
      await handleUpload(droppedFile);
    } else {
      setError('Please drop a .wpress file');
    }
  };
  const handleUpload = async fileToUpload => {
    const uploadFile = fileToUpload || file;
    if (!uploadFile) {
      setError('Please select a backup file');
      return;
    }
    setUploading(true);
    setError(null);
    setUploadProgress(0);
    try {
      const result = await (0,_utils_restoreApi__WEBPACK_IMPORTED_MODULE_3__.uploadRestoreFile)(uploadFile);
      if (result.success) {
        // File uploaded successfully
        const manifest = result.data.manifest;
        const backupSiteUrl = manifest?.site_url || '';

        // Check if migration is needed
        const needsMigration = backupSiteUrl && backupSiteUrl !== currentSiteUrl;
        if (needsMigration) {
          // Show confirmation with migration option
          setUploadedData({
            file: result.data.file,
            manifest: manifest,
            backupSiteUrl: backupSiteUrl,
            needsMigration: true
          });
          setUploading(false);
        } else {
          // No migration needed, start restore directly
          if (onRestoreStart) {
            onRestoreStart(result.data.file, {
              migrateUrls: false,
              backup_type: manifest?.backup_type || "all"
            });
          }
          onClose();
        }
      } else {
        setError(result.data || 'Failed to upload file');
        setUploading(false);
      }
    } catch (err) {
      setError('Upload failed: ' + err.message);
      setUploading(false);
    }
  };
  const handleStartRestore = () => {
    if (uploadedData && onRestoreStart) {
      onRestoreStart(uploadedData.file, {
        migrateUrls,
        backup_type: uploadedData.manifest?.backup_type || "all"
      });
    }
    onClose();
  };
  const formatFileSize = bytes => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  // If we have uploaded data and need migration confirmation
  if (uploadedData && uploadedData.needsMigration) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      title: "URL Migration Required",
      onRequestClose: onClose,
      isDismissible: true,
      style: {
        maxWidth: '600px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "py-lg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
      status: "info",
      isDismissible: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        margin: 0
      }
    }, "This backup is from a different site URL. URL migration will automatically update all URLs in the database.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginTop: '16px',
        padding: '16px',
        backgroundColor: '#f9f9f9',
        borderRadius: '4px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginBottom: '12px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Backup from:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: '13px',
        color: '#666',
        marginTop: '4px'
      }
    }, uploadedData.backupSiteUrl)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginBottom: '16px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Current site:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: '13px',
        color: '#666',
        marginTop: '4px'
      }
    }, currentSiteUrl)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: "Auto-migrate URLs",
      help: migrateUrls ? "All occurrences of the old URL will be replaced with the new URL (recommended)" : "URLs will not be migrated - you'll need to run Search & Replace manually",
      checked: migrateUrls,
      onChange: setMigrateUrls
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
      status: "warning",
      isDismissible: false,
      style: {
        marginTop: '16px'
      }
    }, "Restoring will replace your current site with the backup. This action cannot be undone. Make sure you have a current backup before proceeding."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex gap-md mt-lg justify-end"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "button-secondary",
      onClick: onClose
    }, "Cancel"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "button-primary",
      onClick: handleStartRestore
    }, "Start Restore"))));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: "Restore from File",
    onRequestClose: !uploading ? onClose : undefined,
    isDismissible: !uploading,
    style: {
      maxWidth: '600px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "py-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      border: '2px dashed #ddd',
      borderRadius: '4px',
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      marginBottom: '20px'
    },
    onDragOver: handleDragOver,
    onDrop: handleDrop
  }, file ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginBottom: '8px',
      fontWeight: 600
    }
  }, file.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      fontSize: '12px',
      color: '#666'
    }
  }, formatFileSize(file.size)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "link",
    onClick: () => setFile(null),
    style: {
      marginTop: '8px'
    }
  }, "Remove file")) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginBottom: '16px'
    }
  }, "Drag and drop a .wpress file here, or click to select"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "file",
    accept: ".wpress",
    onChange: handleFileSelect,
    style: {
      display: 'none'
    },
    id: "restore-file-input"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-secondary",
    onClick: () => document.getElementById('restore-file-input').click()
  }, "Select File"))), error && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '16px',
      padding: '12px',
      backgroundColor: '#ffeaea',
      color: '#d63638',
      borderRadius: '4px'
    }
  }, error), !uploading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    status: "warning",
    isDismissible: false
  }, "Restoring will replace your current site with the backup. This action cannot be undone. Make sure you have a current backup before proceeding."), uploading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '20px',
      padding: '16px',
      backgroundColor: '#f0f0f0',
      borderRadius: '4px',
      textAlign: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      marginBottom: '8px',
      fontWeight: 600
    }
  }, "Uploading backup file..."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      fontSize: '12px',
      color: '#666'
    }
  }, "Please wait while we upload and prepare your backup for restore.")), !uploading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-md mt-lg justify-end"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-secondary",
    onClick: onClose
  }, "Cancel"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RestoreModal);

/***/ }),

/***/ "./src/backup-restore/components/RestoreOverlay.js":
/*!*********************************************************!*\
  !*** ./src/backup-restore/components/RestoreOverlay.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_restoreApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/restoreApi */ "./src/backup-restore/utils/restoreApi.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressBar */ "./src/backup-restore/components/ProgressBar.js");

/**
 * Restore Overlay Component
 * Full-screen overlay shown during restore process
 */




const RestoreOverlay = ({
  restoreId,
  backupType: initialBackupType = 'all',
  onComplete
}) => {
  const [progress, setProgress] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [status, setStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('Initializing restore...');
  const [currentStep, setCurrentStep] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [realRestoreId, setRealRestoreId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [backupType, setBackupType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialBackupType); // 'all', 'database', or 'files'

  // If restoreId starts with 'temp_', try to get the real one
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (restoreId && restoreId.startsWith('temp_') && !realRestoreId) {
      const checkForRealId = async () => {
        const statusResult = await (0,_utils_restoreApi__WEBPACK_IMPORTED_MODULE_3__.checkRestoreStatus)();
        if (statusResult.success && statusResult.data && statusResult.data.restore_id) {
          setRealRestoreId(statusResult.data.restore_id);
        }
      };
      checkForRealId();
      const interval = setInterval(checkForRealId, 2000); // Check every 2 seconds
      return () => clearInterval(interval);
    }
  }, [restoreId, realRestoreId]);

  // Use real restoreId if available, otherwise use the provided one
  const actualRestoreId = restoreId && restoreId.startsWith('temp_') ? realRestoreId : restoreId;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Disable all admin interactions
    const adminMenu = document.querySelector('#adminmenumain');
    const adminBar = document.querySelector('#wpadminbar');
    const contentArea = document.querySelector('#wpcontent');
    if (adminMenu) adminMenu.style.pointerEvents = 'none';
    if (adminBar) adminBar.style.pointerEvents = 'none';
    if (contentArea) contentArea.style.pointerEvents = 'none';

    // Prevent navigation
    const handleBeforeUnload = e => {
      e.preventDefault();
      e.returnValue = 'Restore is in progress. Are you sure you want to leave?';
      return e.returnValue;
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Poll for progress with much less frequent calls
    let lastProgress = -1;
    let lastStatus = '';
    let lastMessage = '';
    let timeoutId = null;
    let isPolling = true;
    const BASE_INTERVAL = 8000; // 8 seconds base interval (much less frequent)
    const MAX_INTERVAL = 30000; // 30 seconds max interval
    let currentInterval = BASE_INTERVAL;
    let noChangeCount = 0;
    const pollProgress = async () => {
      if (!isPolling) return;

      // If we're still waiting for real restoreId, show waiting message
      if (restoreId && restoreId.startsWith('temp_') && !realRestoreId) {
        setStatus('Starting restore...');
        setProgress(0);
        if (isPolling) {
          timeoutId = setTimeout(pollProgress, 1000); // Poll more frequently while waiting
        }
        return;
      }
      if (!actualRestoreId) {
        setStatus('Waiting for restore to start...');
        if (isPolling) {
          timeoutId = setTimeout(pollProgress, 1000);
        }
        return;
      }
      const result = await (0,_utils_restoreApi__WEBPACK_IMPORTED_MODULE_3__.getRestoreProgress)(actualRestoreId);
      if (result.success && result.data) {
        const progressData = result.data;
        const currentProgress = progressData.progress || 0;
        const currentStatus = progressData.status || '';
        const currentMessage = progressData.message || '';

        // Always update backup type if provided (critical for showing correct steps)
        if (progressData.backup_type && progressData.backup_type !== backupType) {
          setBackupType(progressData.backup_type);
        }

        // Only update if something actually changed
        const hasChanged = currentProgress !== lastProgress || currentStatus !== lastStatus || currentMessage !== lastMessage;
        if (hasChanged) {
          setProgress(currentProgress);
          setStatus(currentMessage || 'Restoring...');
          setCurrentStep(progressData.current_step || '');
          lastProgress = currentProgress;
          lastStatus = currentStatus;
          lastMessage = currentMessage;
          // Reset to base interval when progress changes
          currentInterval = BASE_INTERVAL;
          noChangeCount = 0;
        } else {
          // Progress hasn't changed, increase interval gradually
          noChangeCount++;
          if (noChangeCount > 2) {
            currentInterval = Math.min(MAX_INTERVAL, currentInterval + 5000);
          }
        }
        if (progressData.status === 'completed') {
          isPolling = false;
          if (timeoutId) clearTimeout(timeoutId);
          // Don't call onComplete automatically - let user stay on the modal
          // Remove beforeunload warning since restore is complete
          window.removeEventListener('beforeunload', handleBeforeUnload);
          // Re-enable interactions since restore is complete
          if (adminMenu) adminMenu.style.pointerEvents = 'auto';
          if (adminBar) adminBar.style.pointerEvents = 'auto';
          if (contentArea) contentArea.style.pointerEvents = 'auto';
        } else if (progressData.status === 'error') {
          isPolling = false;
          if (timeoutId) clearTimeout(timeoutId);
          setError(progressData.message || 'Restore failed');
        } else {
          // Schedule next poll with current interval
          if (isPolling) {
            timeoutId = setTimeout(pollProgress, currentInterval);
          }
        }
      } else {
        // Schedule next poll even if no data
        if (isPolling) {
          noChangeCount++;
          if (noChangeCount > 2) {
            currentInterval = Math.min(MAX_INTERVAL, currentInterval + 5000);
          }
          timeoutId = setTimeout(pollProgress, currentInterval);
        }
      }
    };

    // Start polling immediately
    pollProgress();
    if (actualRestoreId) {
      timeoutId = setTimeout(pollProgress, BASE_INTERVAL);
    } else {
      // Poll more frequently while waiting for real restoreId
      timeoutId = setTimeout(pollProgress, 1000);
    }
    return () => {
      isPolling = false;
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('beforeunload', handleBeforeUnload);

      // Re-enable interactions
      if (adminMenu) adminMenu.style.pointerEvents = 'auto';
      if (adminBar) adminBar.style.pointerEvents = 'auto';
      if (contentArea) contentArea.style.pointerEvents = 'auto';
    };
  }, [restoreId, realRestoreId, onComplete]);

  // Build steps based on backup type - use useMemo to recalculate when backupType changes
  const steps = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const baseSteps = [{
      key: 'validate',
      label: 'Validating backup...'
    }, {
      key: 'extracting',
      label: 'Extracting backup...'
    }];
    if (backupType === 'all' || backupType === 'database') {
      baseSteps.push({
        key: 'database',
        label: 'Restoring database...'
      });
    }
    if (backupType === 'all' || backupType === 'files') {
      baseSteps.push({
        key: 'files',
        label: 'Restoring files...'
      });
    }
    baseSteps.push({
      key: 'finalizing',
      label: 'Finalizing...'
    }, {
      key: 'completed',
      label: 'Restore completed!'
    });
    return baseSteps;
  }, [backupType]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      zIndex: 999999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: '#fff',
      color: '#000',
      padding: '40px',
      borderRadius: '8px',
      maxWidth: '600px',
      width: '90%',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: {
      marginTop: 0,
      marginBottom: '24px'
    }
  }, progress === 100 && !error ? 'Restore Completed' : 'Restore in Progress'), progress < 100 && !error && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    status: "warning",
    isDismissible: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "font-bold text-[1.1rem]"
  }, "Important: Do not close this browser tab."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "An interrupted restore process may break the website.")), progress < 100 && !error && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-lg flex flex-col gap-md justify-center !items-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ProgressBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: progress,
    label: status
  })), progress < 100 && !error && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '24px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: {
      fontSize: '14px',
      fontWeight: 600,
      marginBottom: '12px'
    }
  }, "Current Step:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, steps.map(step => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: step.key,
    style: {
      padding: '8px 12px',
      backgroundColor: currentStep === step.key ? '#e7f5e7' : progress > 0 && steps.findIndex(s => s.key === currentStep) > steps.findIndex(s => s.key === step.key) ? '#f0f0f0' : '#fff',
      border: currentStep === step.key ? '2px solid #4caf50' : '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '13px'
    }
  }, step.label)))), error && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '24px',
      padding: '16px',
      backgroundColor: '#ffeaea',
      color: '#d63638',
      borderRadius: '4px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Error:"), " ", error), progress === 100 && !error && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (backupType === 'all' || backupType === 'database') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    status: "success",
    isDismissible: false,
    onRemove: undefined
  }, "Important: Resave Permalinks"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col gap-md my-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "After restoring a backup, WordPress permalink settings need to be refreshed to ensure all URLs and rewrite rules are properly configured. This is necessary because:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "list-disc pl-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "WordPress stores permalink structure in the database, which may have changed during restore"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "The .htaccess file may need to be regenerated with the correct rewrite rules"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "This ensures all post URLs, category URLs, and custom post type URLs work correctly")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      margin: '8px 0 0 0',
      fontSize: '13px',
      lineHeight: '1.5'
    }
  }, "Click the button below to go to Permalink Settings and click \"Save Changes\" (you don't need to change anything, just save)."))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-md justify-between"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-secondary",
    onClick: () => {
      if (onComplete) {
        onComplete();
      }
    }
  }, "Close"), (backupType === 'all' || backupType === 'database') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-primary",
    onClick: () => {
      window.location.href = backupRestore.adminUrl + 'options-permalink.php';
    }
  }, "Go to Permalink Settings")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RestoreOverlay);

/***/ }),

/***/ "./src/backup-restore/utils/backupApi.js":
/*!***********************************************!*\
  !*** ./src/backup-restore/utils/backupApi.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelBackup: () => (/* binding */ cancelBackup),
/* harmony export */   createBackup: () => (/* binding */ createBackup),
/* harmony export */   deleteBackup: () => (/* binding */ deleteBackup),
/* harmony export */   downloadBackup: () => (/* binding */ downloadBackup),
/* harmony export */   getBackupInfo: () => (/* binding */ getBackupInfo),
/* harmony export */   getBackupProgress: () => (/* binding */ getBackupProgress),
/* harmony export */   listBackups: () => (/* binding */ listBackups)
/* harmony export */ });
/**
 * Backup API utilities
 */

const ajaxurl = backupRestore.ajaxurl;
const nonce = backupRestore.DPDEV_nonce;
const parseJsonResponse = async (response, context = '') => {
  const text = await response.text();
  if (!text) {
    console.error(`[DevKit] Empty JSON response${context ? ` for ${context}` : ''}`, {
      status: response.status
    });
    return {
      success: false,
      data: 'Empty response from server.'
    };
  }
  let jsonText = text.trim();
  const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    jsonText = jsonMatch[0];
  }
  try {
    return JSON.parse(jsonText);
  } catch (error) {
    console.error(`[DevKit] Invalid JSON response${context ? ` for ${context}` : ''}`, {
      status: response.status,
      error,
      bodyPreview: text.substring(0, 500)
    });
    return {
      success: false,
      data: 'Invalid JSON response from server.'
    };
  }
};

/**
 * List all backups
 */
const listBackups = async () => {
  const response = await fetch(ajaxurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      action: "dpdev_list_backups",
      verify_nonce: nonce
    })
  });
  return parseJsonResponse(response, "list_backups");
};

/**
 * Get backup info
 */
const getBackupInfo = async backupId => {
  const response = await fetch(ajaxurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      action: "dpdev_get_backup_info",
      backup_id: backupId,
      verify_nonce: nonce
    })
  });
  return parseJsonResponse(response, "get_backup_info");
};

/**
 * Create new backup
 */
const createBackup = async (options = {}) => {
  const formData = new FormData();
  formData.append("action", "dpdev_create_backup");
  formData.append("verify_nonce", nonce);
  if (options.name) {
    formData.append("name", options.name);
  }
  if (options.type) {
    formData.append("type", options.type);
  }
  if (options.exclude && Array.isArray(options.exclude)) {
    options.exclude.forEach(item => {
      formData.append("exclude[]", item);
    });
  }
  const response = await fetch(ajaxurl, {
    method: "POST",
    body: formData
  });
  return parseJsonResponse(response, "create_backup");
};

/**
 * Get backup progress
 */
const getBackupProgress = async backupId => {
  const response = await fetch(ajaxurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      action: "dpdev_backup_progress",
      backup_id: backupId,
      verify_nonce: nonce
    })
  });
  return parseJsonResponse(response, "backup_progress");
};

/**
 * Download backup
 */
const downloadBackup = backupId => {
  const url = new URL(ajaxurl);
  url.searchParams.append("action", "dpdev_download_backup");
  url.searchParams.append("backup_id", backupId);
  url.searchParams.append("verify_nonce", nonce);
  window.location.href = url.toString();
};

/**
 * Delete backup
 */
const deleteBackup = async backupId => {
  const response = await fetch(ajaxurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      action: "dpdev_delete_backup",
      backup_id: backupId,
      verify_nonce: nonce
    })
  });
  return parseJsonResponse(response, "delete_backup");
};

/**
 * Cancel backup
 */
const cancelBackup = async backupId => {
  const response = await fetch(ajaxurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      action: "dpdev_cancel_backup",
      backup_id: backupId,
      verify_nonce: nonce
    })
  });
  return parseJsonResponse(response, "cancel_backup");
};

/***/ }),

/***/ "./src/backup-restore/utils/restoreApi.js":
/*!************************************************!*\
  !*** ./src/backup-restore/utils/restoreApi.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkRestoreStatus: () => (/* binding */ checkRestoreStatus),
/* harmony export */   getRestoreProgress: () => (/* binding */ getRestoreProgress),
/* harmony export */   startRestore: () => (/* binding */ startRestore),
/* harmony export */   uploadRestoreFile: () => (/* binding */ uploadRestoreFile)
/* harmony export */ });
/**
 * Restore API utilities
 */

const ajaxurl = backupRestore.ajaxurl;
const nonce = backupRestore.DPDEV_nonce;
const parseJsonResponse = async (response, context = '') => {
  const text = await response.text();
  if (!text) {
    console.error(`[DevKit] Empty JSON response${context ? ` for ${context}` : ''}`, {
      status: response.status
    });
    return {
      success: false,
      data: 'Empty response from server.'
    };
  }
  let jsonText = text.trim();
  const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    jsonText = jsonMatch[0];
  }
  try {
    return JSON.parse(jsonText);
  } catch (error) {
    console.error(`[DevKit] Invalid JSON response${context ? ` for ${context}` : ''}`, {
      status: response.status,
      error,
      bodyPreview: text.substring(0, 500)
    });
    return {
      success: false,
      data: 'Invalid JSON response from server.'
    };
  }
};

/**
 * Upload restore file
 */
const uploadRestoreFile = async file => {
  const formData = new FormData();
  formData.append("action", "dpdev_upload_restore_file");
  formData.append("verify_nonce", nonce);
  formData.append("file", file);
  const response = await fetch(ajaxurl, {
    method: "POST",
    body: formData
  });
  return parseJsonResponse(response, "upload_restore_file");
};

/**
 * Start restore
 * @param {string} backupPath - Path to backup file
 * @param {object} options - Optional settings
 * @param {boolean} options.migrateUrls - Whether to auto-migrate URLs (default: true)
 */
const startRestore = async (backupPath, options = {}) => {
  const migrateUrls = options.migrateUrls !== false; // Default to true

  try {
    const response = await fetch(ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        action: "dpdev_start_restore",
        backup_path: backupPath,
        migrate_urls: migrateUrls ? "1" : "0",
        verify_nonce: nonce
      })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    if (!text) {
      throw new Error("Empty response from server");
    }

    // Try to extract JSON from response (in case there's HTML before/after)
    let jsonText = text.trim();

    // Find JSON object in response (handle cases where HTML is prepended/appended)
    const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      jsonText = jsonMatch[0];
    }
    let data;
    try {
      data = JSON.parse(jsonText);
    } catch (e) {
      console.error("Failed to parse JSON. Response:", text.substring(0, 500));
      console.error("JSON parse error:", e);
      throw new Error("Invalid JSON response from server. Response: " + text.substring(0, 200));
    }
    return data;
  } catch (error) {
    console.error("Error starting restore:", error);
    return {
      success: false,
      data: error.message || "Failed to start restore"
    };
  }
};

/**
 * Get restore progress
 */
const getRestoreProgress = async (restoreId = null) => {
  const params = new URLSearchParams({
    action: "dpdev_restore_progress",
    verify_nonce: nonce
  });
  if (restoreId) {
    params.append("restore_id", restoreId);
  }
  const response = await fetch(ajaxurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params
  });
  return parseJsonResponse(response, "restore_progress");
};

/**
 * Check restore status
 */
const checkRestoreStatus = async () => {
  const response = await fetch(ajaxurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      action: "dpdev_check_restore_status",
      verify_nonce: nonce
    })
  });
  return parseJsonResponse(response, "check_restore_status");
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./src/backup-restore/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BackupListPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BackupListPanel */ "./src/backup-restore/components/BackupListPanel.js");

/**
 * Backup & Restore Main Component
 */


const BackupRestoreApp = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BackupListPanel__WEBPACK_IMPORTED_MODULE_2__["default"], null);
};

// Initialize the app
const container = document.getElementById('fm-app');
if (container) {
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
  root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BackupRestoreApp, null));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map