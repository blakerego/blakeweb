class AddOrderToProject < ActiveRecord::Migration
  def change
    add_column :projects, :order, :integer
  end
end
