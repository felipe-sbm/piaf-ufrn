ActiveRecord::Schema.define(version: 2023_10_01_000001) do

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.timestamps
  end

end