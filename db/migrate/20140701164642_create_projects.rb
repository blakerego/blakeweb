class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.string :live_link
      t.string :code_link
      t.string :read_more_link
      t.string :image_url

      t.timestamps
    end
  end
end
