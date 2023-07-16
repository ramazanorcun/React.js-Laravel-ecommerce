<?php

namespace App\Http\Controllers;

use App\Models\UserInformation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserInformationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userInformation = UserInformation::get();
        return response()->json($userInformation);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'user_id' => 'required',
            'name' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'gender' => 'required|',
            'telephone' => 'required|string|max:255',
            'country_code' => 'required|string|max:255',
        ]);
        if($validator->fails())
        {
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }else{
            $userİnformation = new UserInformation;
            $userİnformation -> user_id = $request -> user_id;
            $userİnformation -> name = $request -> name;
            $userİnformation -> lastName = $request -> lastName;
            $userİnformation -> email = $request -> email;
            $userİnformation -> gender = $request -> gender;
            //istek atarken hata alınabilir
            $userİnformation -> country_code = $request -> country_code;
            $userİnformation -> telephone = $request -> telephone;
            $userİnformation -> save();
            return response()->json($userİnformation);

        }

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


    }

    /**
     * Display the specified resource.
     */
    public function show(UserInformation $userInformation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserInformation $userInformation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserInformation $userInformation, $id)
    {
        $subCategory = UserInformation::find($id);
        $userİnformation -> user_id = $request -> user_id;
        $userİnformation -> name = $request -> name;
        $userİnformation -> lastName = $request -> lastName;
        $userİnformation -> email = $request -> email;
        $userİnformation -> gender = $request -> gender;
        //istek atarken hata alınabilir
        $userİnformation -> country_code = $request -> country_code;
        $userİnformation -> telephone = $request -> telephone;
        $subCategory -> update();
        return response()->json($subCategory);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserInformation $userInformation)
    {
        //
    }
}
