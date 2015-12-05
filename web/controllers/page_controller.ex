defmodule Kanban.PageController do
  use Kanban.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
