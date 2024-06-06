## Introduction

Tasks is a RESTful API designed to manage tasks. It provides endpoints for creating, updating, deleting, and retrieving tasks.

## Authentication

This API does not require authentication.

## Endpoints

#### Create Task

```http
  POST /api/tasks
```

| Parameter     | Type     | Description                           |
| :------------ | :------- | :------------------------------------ |
| `title`       | `string` | **Required**. title is required       |
| `Description` | `string` | **Required**. Description is required |

#### Response

{
"id": "task_id",
"title": "Task Title",
"description": "Task Description"
}

#### Update Task

```http
  PUT /api/tasks/:id
```

#### Parameters

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `id`      | `string` | **Required**. Id of task to |

#### Request Body

| Parameter     | Type     | Description                           |
| :------------ | :------- | :------------------------------------ |
| `title`       | `string` | **Required**. title is required       |
| `Description` | `string` | **Required**. Description is required |

#### Response

{
"id": "task_id",
"title": "Task Title",
"description": "Task Description"
}

#### Delete Task

```http
  DELETE /api/tasks/:id
```

#### Parameters

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `id`      | `string` | **Required**. Id of task to |

#### Response

{
"message": "Task deleted successfully"
}

#### Get All Tasks

```http
  GET /api/tasks
```

#### Response

[
{
 "id": "task_id",
 "title": "Task Title",
 "description": "Task Description"
 },
 {
 "id": "task_id",
 "title": "Task Title",
 "description": "Task Description"
 }, ...]

## Run Locally

Clone the project

```bash
  git clone https://github.com/Madhuri2808/Tasks.git
```

Go to the project directory

```bash
  cd backendTask
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Access the API

Access the API at
```bash
    curl http://localhost:9000/api/tasks
```

