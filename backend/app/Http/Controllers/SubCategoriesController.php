<?php

namespace App\Http\Controllers;

use App\Models\subCategories;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subCategory = SubCategories::get();
        return response()->json($subCategory);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'category_id' => 'required',
            'name' => 'required',

        ]);
        if($validator->fails())
        {
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }
        $subCategory = new SubCategories;
        $subCategory -> category_id = $request -> category_id;
        $subCategory -> name = $request -> name;
        $subCategory -> save();
        return response()->json($subCategory);


    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(subCategories $subCategories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(subCategories $subCategories)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $subCategory = SubCategories::find($id);
        $subCategory -> name = $request -> name;
        $subCategory -> update();
        return response()->json($subCategory);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(subCategories $subCategories, $id)
    {
        $subCategory = SubCategories:: find($id);
        $subCategory -> delete();
        return response()->json($subCategory);
    }
}
