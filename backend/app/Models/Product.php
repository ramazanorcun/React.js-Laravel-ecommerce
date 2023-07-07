<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'image',
        'price',
        'description',
        'sub_category_id',

    ];

        public function getSubCategories()
        {
            return $this->hasMany(SubCategories::class, 'sub_category_id', 'id');
        }

}
