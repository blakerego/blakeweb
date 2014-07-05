class AddDetailsToProject < ActiveRecord::Migration
  def change
    add_column :projects, :details, :string
  end
end
