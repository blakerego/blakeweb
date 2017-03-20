class AddWordpressSlugToProject < ActiveRecord::Migration
  def change
    add_column :projects, :wordpress_slug, :string
  end
end
