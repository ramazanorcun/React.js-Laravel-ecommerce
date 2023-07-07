<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class subCategories extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'category_id'
    ];

        public function getCategories()
        {
            return $this->belongsTo(Categories::class, 'category_id', 'id');
        }
        public function getSubCategories()
        {
            return $this -> belongsTo(Product::class, 'id', 'sub_category_id');
        }

}
