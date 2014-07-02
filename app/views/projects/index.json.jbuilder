json.array!(@projects) do |project|
  json.extract! project, :id, :name, :description, :live_link, :code_link, :read_more_link, :image_url
  json.url project_url(project, format: :json)
end
