var PR_TITLE = document.getElementById('pull_request_title').value;
document.getElementById('pull_request_title').value = PR_TITLE.replace(/\:([a-zA-z0-9_]+)\: /, '');
