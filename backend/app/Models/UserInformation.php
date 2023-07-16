<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInformation extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'name',
        'lastName',
        'email',
        'gender',
        'country_code',
        'telephone',
    ];
    public function getUser()
        {
            return $this->belongsTo(UserInformation::class, 'user_id', 'id');
        }
}
